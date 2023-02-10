export const roles = {
  Requester: [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
    {
      href: "/reservation",
      title: "Reservation",
      icon: "mdi mdi-cart",
    },
    {
      href: "/fpb",
      title: "FPB",
      icon: "mdi mdi-cart",
    },
  ],
  PJK: [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
  ],
  PJB: [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
  ],
  "PIC Purchasing": [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
  ],
  Warehouse: [
    "Home",
    { Reservation: ["Approval"] },
    { FPB: ["Approval"] },
    "Stock Opname",
    { Master: ["1"] },
    { Report: ["2"] },
    { Chart: ["3"] },
  ],
  Procurement: [
    "Home",
    { Reservation: ["1"] },
    "Approval FPB",
    "Stock Opname",
    { Master: ["2"] },
    { Report: ["3"] },
    { Chart: ["4"] },
  ],
  "Purcashing Coord": ["Home", "FPB List"],
};
