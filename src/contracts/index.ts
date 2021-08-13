const contracts = {
  AngelProtocolIndexFund: {
    address: {
      localterra: "terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5",
    },
    handleMessages: {
      depositDonor: { increment: {} },
    },
    queryMessages: {
      getBalance: { get_count: {} },
    },
  },
};

export default contracts;