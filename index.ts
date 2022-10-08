import * as Plot from "@observablehq/plot";

async function main(): Promise<void> {
  const barchart = Plot.plot({
    grid: true,
    color: {
      domain: [52, 62],
      pivot: 55,
      scheme: "BuRd",
    },
    marks: [
      Plot.barY(data, {
        x: "name",
        y: "playoff_ts_pct",
        fill: "playoff_ts_pct",
      }),
      Plot.ruleY([0]),
    ],
  });
  document.querySelector("#plot")!.append(barchart);
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});

const data = [
  {
    name: "Stephen Curry",
    team: "GSW",
    usg_pct: 30.8,
    ts_pct: 60.099999999999994,
    playoff_mp: 150,
    playoff_usg_pct: 37,
    playoff_ts_pct: 64.1,
    playoff_mpg: 30,
  },
  {
    name: "Ja Morant",
    team: "MEM",
    usg_pct: 33.7,
    ts_pct: 57.49999999999999,
    playoff_mp: 222,
    playoff_usg_pct: 28.4,
    playoff_ts_pct: 49.6,
    playoff_mpg: 37,
  },
  {
    name: "Devin Booker",
    team: "PHO",
    usg_pct: 32,
    ts_pct: 57.599999999999994,
    playoff_mp: 98,
    playoff_usg_pct: 27.9,
    playoff_ts_pct: 64.5,
    playoff_mpg: 32.67,
  },
  {
    name: "Kevin Durant",
    team: "BRK",
    usg_pct: 31.2,
    ts_pct: 63.4,
    playoff_mp: 176,
    playoff_usg_pct: 31.5,
    playoff_ts_pct: 52.6,
    playoff_mpg: 44,
  },
  {
    name: "Jayson Tatum",
    team: "BOS",
    usg_pct: 32.1,
    ts_pct: 57.8,
    playoff_mp: 167,
    playoff_usg_pct: 30.7,
    playoff_ts_pct: 61.6,
    playoff_mpg: 41.75,
  },
  {
    name: "James Harden",
    team: "PHI",
    usg_pct: 27.2,
    ts_pct: 58.3,
    playoff_mp: 243,
    playoff_usg_pct: 23,
    playoff_ts_pct: 58.199999999999996,
    playoff_mpg: 40.5,
  },
];
