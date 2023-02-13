export const roles = {
  Requester: [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
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
  Warehouse: [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
    {
      title: "FPB",
      icon: "mdi mdi-cart",
      child: [
        {
          href: "/fpb/receipt",
          icon: "mdi mdi-share",
          title: "Receipt",
        },
      ],
    },
    {
      title: "Master",
      icon: "mdi mdi-dropbox",
      child: [
        {
          href: "/master/material",
          icon: "mdi mdi-share",
          title: "Material",
        },
      ],
    },
    {
      title: "Reports",
      icon: "mdi mdi-table",
      child: [
        {
          href: "/reports/status",
          title: "Status",
          icon: "mdi mdi-share",
        },
      ],
    },
  ],
  Procurement: [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
    {
      href: "/fpb/approval",
      title: "Approval FPB",
      icon: "mdi mdi-newspaper-variant-outline",
    },
    {
      title: "Master",
      icon: "mdi mdi-dropbox",
      child: [
        {
          icon: "mdi mdi-package-variant-closed",
          title: "Material",
          child: [
            {
              href: "/material/head",
              title: "Material Head",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/material/det",
              title: "Material Det",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/material/type",
              title: "Material Type",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/material/group",
              title: "Material Group",
              icon: "mdi mdi-circle-outline",
            },
          ],
        },
        {
          href: "/department",
          title: "Department",
          icon: "mdi mdi-share",
        },
        {
          href: "/cost-center",
          title: "Cost Center",
          icon: "mdi mdi-share",
        },
        {
          href: "/user",
          title: "User",
          icon: "mdi mdi-share",
        },
        {
          href: "/config-pjb",
          title: "Config PJB",
          icon: "mdi mdi-share",
        },
        {
          href: "/vendor",
          title: "Vendor",
          icon: "mdi mdi-share",
        },
      ],
    },
    {
      title: "Reports",
      icon: "mdi mdi-table",
      child: [
        {
          href: "/reports/price-compare",
          title: "Price Comparison",
          icon: "mdi mdi-share",
        },
        {
          title: "request",
          icon: "mdi mdi-share",
          child: [
            {
              href: "/reports/request/vendor",
              title: "Vendor",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/material",
              title: "Material",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/pic",
              title: "PIC",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/department",
              title: "Department",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/status",
              title: "Status",
              icon: "mdi mdi-circle-outline",
            },
          ],
        },
        {
          href: "/reports/fpb-history",
          title: "FPB History",
          icon: "mdi mdi-share",
        },
        {
          href: "/reports/fpb-all",
          title: "FPB All",
          icon: "mdi mdi-share",
        },
      ],
    },
    {
      title: "Chart",
      icon: "mdi mdi-chart-areaspline-variant",
      child: [
        {
          href: "/chart/fpb",
          title: "FPB",
          icon: "mdi mdi-share",
        },
      ],
    },
  ],
  "Purchasing Head": [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
    {
      href: "/fpb/list",
      title: "FPB List",
      icon: "mdi mdi-cart",
    },
    {
      title: "Master",
      icon: "mdi mdi-dropbox",
      child: [
        {
          href: "/master/user",
          title: "User",
          icon: "mdi mdi-share",
        },
        {
          href: "/master/config-pjb",
          title: "Config PJB",
          icon: "mdi mdi-share",
        },
      ],
    },
    {
      title: "Reports",
      icon: "mdi mdi-table",
      child: [
        {
          href: "/reports/price-compare",
          title: "Price Comparison",
          icon: "mdi mdi-share",
        },
        {
          title: "request",
          icon: "mdi mdi-share",
          child: [
            {
              href: "/reports/request/vendor",
              title: "Vendor",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/material",
              title: "Material",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/pic",
              title: "PIC",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/department",
              title: "Department",
              icon: "mdi mdi-circle-outline",
            },
            {
              href: "/reports/request/status",
              title: "Status",
              icon: "mdi mdi-circle-outline",
            },
          ],
        },
        {
          href: "/reports/fpb-history",
          title: "FPB History",
          icon: "mdi mdi-share",
        },
        {
          href: "/reports/fpb-all",
          title: "FPB All",
          icon: "mdi mdi-share",
        },
      ],
    },
    {
      title: "Chart",
      icon: "mdi mdi-chart-areaspline-variant",
      child: [
        {
          href: "/chart/fpb",
          title: "FPB",
          icon: "mdi mdi-share",
        },
      ],
    },
  ],
  "Reviewer ICT": [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
    {
      href: "/fpb/review",
      title: "Review FPB",
      icon: "mdi mdi-cart",
    },
  ],
  "PIC Purchasing": [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
    {
      href: "/sap",
      title: "SAP",
      icon: "mdi mdi-arrow-top-right-bold-box",
    },
  ],
  "Reviewer Purchasing": [
    {
      href: "/home/dashboard",
      title: "Dashboard",
      icon: "mdi mdi-home",
    },
  ],
};
