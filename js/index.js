function toggleDropdown(x) {
  var dropdown = x.nextElementSibling;
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
}

for (let i = 0; i < document.querySelectorAll(".dropbtn").length; i++) {
  document.addEventListener("click", function (e) {
    if (
      e.target != document.querySelectorAll(".dropbtn")[i] &&
      e.target != document.querySelectorAll(".dropbtn")[i].firstElementChild
    ) {
      document
        .querySelectorAll(".dropdown-content")
        [i].classList.remove("show");
    }
  });
}

const today = extractDate(new Date());

$(window).ready(function () {
  $(".loader").animate({ opacity: 0 }, 1500, function () {});
  $(".loadingSrceen").animate({ opacity: 0 }, 1500, function () {
    $(".loadingSrceen").css("display", "none");
    $("body").css("overflow", "auto");
  });
});

// this is the area chart code and datasets

const areaChartOptions = {
  series: [
    {
      name: "Sales",
      data: [
        31, 22, 40, 50, 40, 23, 28, 51, 42, 82, 65, 56, 40, 33, 31, 22, 40, 50,
        40, 23, 28, 51, 42, 82,
      ],
    },
    {
      name: "Revenue",
      data: [
        11, 33, 43, 32, 44, 52, 60, 41, 32, 42, 35, 76, 50, 13, 22, 40, 50, 40,
        13, 28, 51, 42, 82, 65,
      ],
    },
    {
      name: "Customers",
      data: [
        15, 11, 32, 18, 9, 24, 50, 11, 12, 52, 25, 16, 40, 43, 22, 40, 50, 40,
        23, 28, 11, 62, 32, 65,
      ],
    },
  ],
  markers: {
    size: 0,
    hover: {
      size: 7,
    },
  },
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "datetime",
    categories: [
      `${today}T00:00:00.000Z`,
      `${today}T01:30:00.000Z`,
      `${today}T02:30:00.000Z`,
      `${today}T03:30:00.000Z`,
      `${today}T04:30:00.000Z`,
      `${today}T05:30:00.000Z`,
      `${today}T06:30:00.000Z`,
      `${today}T07:30:00.000Z`,
      `${today}T08:30:00.000Z`,
      `${today}T09:30:00.000Z`,
      `${today}T10:30:00.000Z`,
      `${today}T11:30:00.000Z`,
      `${today}T12:30:00.000Z`,
      `${today}T13:30:00.000Z`,
      `${today}T14:30:00.000Z`,
      `${today}T15:30:00.000Z`,
      `${today}T16:30:00.000Z`,
      `${today}T17:30:00.000Z`,
      `${today}T18:30:00.000Z`,
      `${today}T19:30:00.000Z`,
      `${today}T20:30:00.000Z`,
      `${today}T21:30:00.000Z`,
      `${today}T22:30:00.000Z`,
      `${today}T23:30:00.000Z`,
    ],
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 0.1,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  tooltip: {
    x: {
      format: "yyyy/MM/dd HH:mm:ss",
    },
  },
  grid: {
    show: true,
    borderColor: "#99BCC4",
    strokeDashArray: 1,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

const area = new ApexCharts(document.querySelector(".chart"), areaChartOptions);
area.render();

const myTable = new simpleDatatables.DataTable("#myTable", {
  perPage: 5,
});

$(".datatable-input").addClass("form-control");

// radar chart code

const radarChartOptions = {
  series: [
    {
      name: "Allocated Budget",
      data: [650, 720, 950, 900, 690, 200],
    },
    {
      name: "Actual Spending",
      data: [750, 850, 800, 700, 900, 880],
    },
  ],
  chart: {
    height: 450,
    type: "radar",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  stroke: {
    width: 2,
    // colors: ["red", "blue"],
  },
  fill: {
    opacity: 0.0,
  },
  markers: {
    // colors: ["red", "blue"],
    size: 3,
    hover: {
      size: 7,
    },
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: "red",
        fill: {
          colors: ["#d0d0d0", "#fff"],
        },
      },
    },
  },
  xaxis: {
    categories: [
      "Sales",
      "Marketing",
      "Development",
      "Customer Support",
      "Information Technology",
      "Administration",
    ],
  },
  yaxis: {
    show: false,
  },
};

const radar = new ApexCharts(
  document.querySelector(".radar"),
  radarChartOptions
);
radar.render();

// the dount chart code

const dountChartOptions = {
  series: [1048, 735, 580, 484, 300],
  labels: ["Search Engine", "Direct", "Email", "Union Ads", "Video Ads"],
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 400,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const dount = new ApexCharts(
  document.querySelector("#dount"),
  dountChartOptions
);
dount.render();
