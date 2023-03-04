import { KeplrQRCodeModalV1 } from "@keplr-wallet/wc-qrcode-modal";
import SignClient from "@walletconnect/sign-client";
import { useEffect, useState } from "react";
import {
  Connected,
  Cosmos,
  KeplrWC,
  WCDirectSignRes,
  Wallet,
  WalletState,
} from "../types";
import icon from "assets/icons/wallets/keplr.png";

const QRModal = new KeplrQRCodeModalV1();

//user peer name as ID
const PEER_NAME = "Keplr";

type WCSession = Awaited<
  ReturnType<Awaited<ReturnType<SignClient["connect"]>>["approval"]>
>;

let client: SignClient;
async function getClient(): Promise<SignClient> {
  if (client) return client;
  client = await SignClient.init({
    projectId: "039a7aeef39cb740398760f71a471957",
  });
  return client;
}

/** NOTE: only use this wallet in mainnet */
export function useKeplrV2(): Wallet {
  const [state, setState] = useState<WalletState>({
    status: "disconnected",
    connect,
  });

  /** persistent connection */
  useEffect(() => {
    (async () => {
      setState({ status: "loading" });
      const client = await getClient();
      const prevSession = client.session
        .getAll()
        .find((s) => s.peer.metadata.name === PEER_NAME);

      if (prevSession) {
        setState({
          type: "cosmos",
          status: "connected",
          ...(await getWalletInfo(client, prevSession)),
          disconnect,
        });
        client.on("session_delete", onSessionDelete);
      } else {
        setState({ status: "disconnected", connect });
      }
    })();
  }, []);

  function onSessionDelete() {
    setState({ status: "disconnected", connect });
  }

  /** new connection */
  async function connect() {
    setState({ status: "loading" });
    const client = await getClient();

    const prevSession = client.session
      .getAll()
      .find((s) => s.peer.metadata.name === PEER_NAME);

    if (prevSession) {
      return console.log(prevSession);
    }

    const prevPairing = client.pairing
      .getAll({ active: true })
      .find((p) => p.peerMetadata?.name === PEER_NAME);

    const { uri, approval } = await client.connect({
      pairingTopic: prevPairing?.topic,
      requiredNamespaces: {
        cosmos: {
          methods: ["cosmos_signDirect", "cosmos_signAmino"],
          chains: ["cosmos:juno-1"],
          events: [],
        },
      },
    });

    // uri is only returned for new pairings
    if (uri) {
      QRModal.open(uri, (/** close callback */) => {
        setState({ status: "disconnected", connect });
      });
    }

    const session = await approval();
    setState({
      type: "cosmos",
      status: "connected",
      ...(await getWalletInfo(client, session)),
      disconnect,
    });

    client.on("session_delete", onSessionDelete);
    if (uri) {
      QRModal.close();
    }
  }

  async function disconnect() {
    setState({ status: "loading" });
    const client = await getClient();
    const session = client.session
      .getAll()
      .find((s) => s.peer.metadata.name === PEER_NAME);

    if (session) {
      await client.disconnect({
        topic: session.topic,
        reason: { code: 1, message: "user disconnected" },
      });
    }
    client.off("session_delete", onSessionDelete);
    setState({ status: "disconnected", connect });
  }
  return {
    ...state,
    logo: icon,
    id: "keplr-wc",
    name: "Keplr mobile",
  };
}

async function getWalletInfo(
  client: SignClient,
  session: WCSession
): Promise<Pick<Connected & Cosmos, "address" | "chainId" | "client">> {
  const { namespaces, topic } = session;
  const cosmos = namespaces.cosmos;
  const [, chainId, address] = cosmos.accounts[0].split(":");

  const wcClient: KeplrWC = {
    signDirect(signer, doc) {
      return client.request<WCDirectSignRes>({
        topic: topic,
        chainId,
        request: {
          method: "cosmos_signDirect",
          params: { signerAddress: signer, signDoc: doc },
        },
      });
    },
  };

  return {
    chainId,
    address,
    client: wcClient,
  };
}
