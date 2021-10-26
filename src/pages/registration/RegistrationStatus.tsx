import { useEffect } from "react";
import { useGetCharityDataQuery } from "api/charityAPIs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { TStore } from "Redux/store";
import { register } from "types/routes";
import Action from "./Action";

const RegistrationStatus = () => {
  //url is app/register/status
  const history = useHistory();
  const { userData } = useSelector((state: TStore) => state.user);
  const { data, error } = useGetCharityDataQuery(userData.PK);
  useEffect(() => {
    if (error) {
      //TODO:provide typing for this error if possible
      //encountered error of this shape
      /*{
      "status": "FETCH_ERROR",
      "error": "TypeError: Failed to fetch"
      } */
      const messageData: any = error;
      toast.error(messageData?.data?.message || "something wen't wrong");
    }
  }, [error]);

  const status = {
    contact_details: !!data?.MetaData,
    wallet_address: data?.MetaData?.TerraWallet,
    document:
      data?.Registration?.ProofOfIdentityVerified &&
      data?.Registration?.ProofOfEmploymentVerified &&
      data?.Registration?.EndowmentAgreementVerified
        ? 2
        : data?.Registration?.ProofOfEmployment != "" &&
          data?.Registration?.ProofOfEmployment != undefined &&
          data?.Registration?.ProofOfIdentity != "" &&
          data?.Registration?.ProofOfIdentity != undefined &&
          data?.Registration?.EndowmentAgreement != "" &&
          data?.Registration?.EndowmentAgreement != undefined
        ? 1
        : 0,
    endowment:
      data?.Metadata?.EndowmentStatus === "Active" ? 0 : data?.Metadata ? 1 : 2,
    completed: userData?.RegistrationStatus,
  };

  const navigate = (dest: string) => () => {
    history.push(dest);
  };

  return (
    <div className="">
      <div className="necessary-information">
        <div className="">
          <h3 className="text-3xl font-bold">Necessary Information</h3>
          <span className="">
            You need to complete all the following steps to be able to create
            your endowment
          </span>
        </div>
        <div className="infor-status my-2">
          <div className="py-2 mx-auto flex justify-between md:w-3/5 xl:w-2/5">
            <div className="status text-left font-bold">
              <p className="">Step #1: Contact Details</p>
              <p className="status-text uppercase text-green-500">Complete</p>
            </div>
            <div className="">
              <Action
                classes="bg-yellow-blue w-40 h-10"
                onClick={navigate(register.detail)}
                title="Change"
                disabled={userData.PK === ""}
              />
            </div>
          </div>
          <div className="py-2 mx-auto flex justify-between md:w-3/5 xl:w-2/5">
            <div className="status text-left font-bold">
              <p className="">Step #2: Wallet Address</p>
              {status.wallet_address ? (
                <p className="status-text uppercase text-green-500">Complete</p>
              ) : (
                <p className="status-text uppercase text-yellow-600">Missing</p>
              )}
            </div>
            <div className="">
              <Action
                classes="bg-thin-blue w-40 h-10"
                onClick={navigate(register.wallet_check)}
                title={status.wallet_address ? "Change" : "Continue"}
                disabled={userData.PK === ""}
              />
            </div>
          </div>
          <div className="py-2 mx-auto flex justify-between md:w-3/5 xl:w-2/5">
            <div className="status text-left font-bold">
              <p className="">Step #3: Documentation</p>
              {status.document === 2 && (
                <p className="status-text uppercase text-green-500">Complete</p>
              )}
              {status.document === 1 && (
                <p className="status-text uppercase text-yellow-blue">
                  In Review
                </p>
              )}
              {status.document === 0 && (
                <p className="status-text uppercase text-yellow-600">Missing</p>
              )}
            </div>
            <div className="">
              <Action
                classes="bg-thin-blue w-40 h-10"
                onClick={() =>
                  history.push({
                    pathname: register.upload_docs,
                    state: {
                      data: data?.Registration,
                    },
                  })
                }
                title={status.document === 2 ? "Change" : "Continue"}
                disabled={userData.PK === "" || !data?.Metadata}
              />
            </div>
          </div>
          <div className="py-2 mx-auto flex justify-between md:w-3/5 xl:w-2/5">
            <div className="status text-left font-bold">
              <p className="">Status of Your Endowment</p>
              <p className="status-text uppercase text-red-600">
                {status.endowment === 0
                  ? "Complete"
                  : status.endowment === 1
                  ? "Missing"
                  : "Not available"}
              </p>
            </div>
            <div className="">
              <Action
                classes="bg-thin-blue w-40 h-10"
                onClick={navigate(register.wallet_check)}
                title={status.endowment === 0 ? "Complete" : "Continue"}
                disabled={status.endowment === 2 || userData.PK === ""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="optional-information my-5">
        <div className="">
          <h3 className="text-3xl font-bold">Optional Information</h3>
          <span className="">
            Without the following information, you will still be able to create
            your endowment but your organization won't appear publicly on our
            platform. You will be able to edit this information at any time.
          </span>
        </div>
        <div className="infor-status my-2">
          <div className="py-2 mx-auto flex justify-between md:w-3/5 xl:w-2/5">
            <div className="status text-left font-bold">
              <p className="">Step #1: Charity Profile</p>
              {data?.contact_details ? (
                <p className="status-text uppercase text-green-500">complete</p>
              ) : (
                <p className="status-text uppercase text-yellow-600">Missing</p>
              )}
            </div>
            <div className="">
              <Action
                classes="bg-yellow-blue w-40 h-10"
                onClick={() =>
                  history.push({
                    pathname: register.charity_profile,
                    state: {
                      data: data?.MetaData,
                    },
                  })
                }
                title="Change"
                disabled={userData.PK === ""}
              />
            </div>
          </div>
          <div className="py-2 mx-auto flex justify-between md:w-3/5 xl:w-2/5">
            <div className="status text-left font-bold">
              <p className="">Step #2: Key Person Profile</p>
              {data?.KeyPerson ? (
                <p className="status-text uppercase text-green-500">complete</p>
              ) : (
                <p className="status-text uppercase text-yellow-600">Missing</p>
              )}
            </div>
            <div className="">
              <Action
                classes={
                  data?.KeyPerson
                    ? "bg-yellow-blue w-40 h-10"
                    : "bg-thin-blue w-40 h-10"
                }
                onClick={() =>
                  history.push({
                    pathname: register.key_person,
                    state: {
                      data: data?.KeyPerson,
                    },
                  })
                }
                title={data?.KeyPerson ? "Change" : "Continue"}
                disabled={userData.PK === ""}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Action
          classes="bg-thin-blue w-64 h-10"
          title={"Go to " + userData.CharityName + "'s profile"}
          onClick={navigate(register.charity_profile)}
          disabled={!status.completed || userData.PK === ""}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationStatus;
