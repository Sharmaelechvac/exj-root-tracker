// Milano interactive map — data frozen from BuzzDrafts job 5 register (set Rev 5, DRAFT — IN REVIEW).
// Cut 2026-11-08 from the canonical Rev 5 register; register SHA-256 bbbb21e772b54ad9af656a3c63f23f4455f94570085864326e15585ab3a65dd8 (verified before building, from the production Rev 5 register bundle file stored on job 5).
// Supersedes the Rev 4 bundle. Local data only — no network use.
// Counts: 30 circuits / 148 physical devices + 1 virtual proposal node (149 register devices) / 53 legs.
// Cable total 3,794 ft — PROVISIONAL / ASSUMED (per-circuit feet carried unchanged from the Rev 3 PDF E-3 subtotals; the register JSON carries no per-circuit cable figures).
// Rev 5 deltas in this projection: 27 register positions updated (26 A7 placement moves + REC-015 device 15); 5 NEW source-candidate devices (145–149, circuitId null, candidateStatus 'SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED'); devices 76/77/78 kind ceiling_fixture_outlet (generic Ceiling Fixture Outlet per the A7 legend — NOT pendant, NOT recessed can; the Rev 4 projection's 'pendant' typing is superseded); 17 legs carry legNote SOURCE_SUPPORTED_CONTROL_INTENT_ONLY annotations (metadata only — endpoints/circuits unchanged; NOT installed control wiring).
// Projection note: this data.js is a REDUCED projection of the canonical register (subset of fields, plus derived color/cableFt/deviceIds); it serializes to different bytes and a different hash than the canonical register — see Register-14065-Rev5-SERIALIZATION.md.
window.MILANO_DATA = {
 "meta": {
  "address": "14065 SW 48th Ave",
  "city": "Ocala, FL 34473",
  "plan": "Milano",
  "builder": "EXJ Root LLC",
  "owner": null,
  "ownerNote": "Owner not verified in the Milano source/baseline — omitted (owner direction 2026-11-08). Builder of record: EXJ Root LLC.",
  "permit": "BLDR-26-07-19613",
  "status": "DRAFT — IN REVIEW",
  "setRev": 5,
  "setRevLabel": "Draft — in review",
  "revisedAt": "2026-11-08",
  "stamp": "NOT FOR BUILDING DEPARTMENT SUBMISSION",
  "serviceAmps": 200,
  "panelSpaces": 30,
  "livingSqft": 2123,
  "frame": {
   "w": 2255,
   "h": 2653,
   "imgOffX": 60,
   "imgOffY": 40,
   "imgW": 2435,
   "imgH": 2733
  },
  "totalCableFt": 3794,
  "registerSha256": "bbbb21e772b54ad9af656a3c63f23f4455f94570085864326e15585ab3a65dd8",
  "registerSource": "BuzzDrafts job 5 canonical register at set Rev 5 (revised 2026-11-08T22:24:10Z). Production Rev 5 register bundle file IS stored on job 5: Register-Bundle-14065-sw-48th-ave-Rev5.json (202,710 B, file SHA-256 c0d747df9422bc8baeca2de6d35d6847ea755ee3fddadf95d0d6717a17fe891a); its register section was re-serialized per the app's canonical rule (circuits by space, devices/legs by id, fixed field order, compact JSON, UTF-8) and its SHA-256 verified against registerSha256 (bbbb21e7…65dd8) before building. Production also stores Source-Mapping-Manifest-14065-Rev5.json (30,883 B, file SHA-256 63b4a0a9a8f9b5affc7ee10f328ba05058c3ca28c7a8d17da377f8fa058de88e) and the Rev 4 bundle (127,390 B, file SHA-256 06f957c64b67c4ceefe86593b217f2039f1c60bc83faf98bc755ec47e72a242f).",
  "cableNote": "PROVISIONAL / ASSUMED — not measured routing or a takeoff. Per-circuit feet are carried unchanged from the Rev 3 PDF set's E-3 subtotals (same total 3,794 ft; no new PDF set was generated in Rev 4 or Rev 5); the register JSON itself carries no per-circuit cable figures.",
  "physicalDevices": 148,
  "virtualNodes": 1,
  "totalDevices": 149,
  "legCount": 53
 },
 "circuits": [
  {
   "id": 65,
   "space": 1,
   "description": "RANGE",
   "color": "#c0392b",
   "breakerAmps": 50,
   "poles": 2,
   "wire": "6/3",
   "loadVa": 12000,
   "cableFt": 53,
   "deviceIds": [
    81
   ]
  },
  {
   "id": 66,
   "space": 2,
   "description": "VENTED MICROWAVE",
   "color": "#2471a3",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": 1500,
   "cableFt": 54,
   "deviceIds": [
    82
   ]
  },
  {
   "id": 67,
   "space": 3,
   "description": "KITCHEN SA-1 COUNTER GFI",
   "color": "#229954",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": 1500,
   "cableFt": 118,
   "deviceIds": [
    71,
    70,
    69,
    68
   ]
  },
  {
   "id": 68,
   "space": 4,
   "description": "KITCHEN SA-2 ISLAND + S. COUNTER GFI",
   "color": "#b9770e",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": 1500,
   "cableFt": 129,
   "deviceIds": [
    73,
    72,
    75,
    74
   ]
  },
  {
   "id": 69,
   "space": 5,
   "description": "REFRIGERATOR",
   "color": "#7d3c98",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": 1200,
   "cableFt": 71,
   "deviceIds": [
    87,
    86
   ]
  },
  {
   "id": 70,
   "space": 6,
   "description": "DISHWASHER",
   "color": "#148f77",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "12/2",
   "loadVa": 1200,
   "cableFt": 58,
   "deviceIds": [
    83
   ]
  },
  {
   "id": 71,
   "space": 7,
   "description": "GARBAGE DISPOSAL",
   "color": "#ba4a00",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "12/2",
   "loadVa": 864,
   "cableFt": 79,
   "deviceIds": [
    84
   ]
  },
  {
   "id": 72,
   "space": 8,
   "description": "DRYER",
   "color": "#2e86c1",
   "breakerAmps": 30,
   "poles": 2,
   "wire": "10/3",
   "loadVa": 5000,
   "cableFt": 41,
   "deviceIds": [
    120
   ]
  },
  {
   "id": 73,
   "space": 9,
   "description": "WASHER / LAUNDRY RECEPTS",
   "color": "#a93226",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": 1500,
   "cableFt": 118,
   "deviceIds": [
    121,
    119,
    122,
    123
   ]
  },
  {
   "id": 74,
   "space": 10,
   "description": "WATER HEATER",
   "color": "#1e8449",
   "breakerAmps": 30,
   "poles": 2,
   "wire": "10/2",
   "loadVa": 4500,
   "cableFt": 35,
   "deviceIds": [
    130
   ]
  },
  {
   "id": 75,
   "space": 11,
   "description": "AIR HANDLER (*PER NAMEPLATE)",
   "color": "#6c3483",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 38,
   "deviceIds": [
    129
   ]
  },
  {
   "id": 76,
   "space": 12,
   "description": "A/C CONDENSER (*PER NAMEPLATE)",
   "color": "#935116",
   "breakerAmps": null,
   "poles": 2,
   "wire": "",
   "loadVa": null,
   "cableFt": 32,
   "deviceIds": [
    132
   ]
  },
  {
   "id": 77,
   "space": 13,
   "description": "BATH GFI RECEPTACLES (ALL BATHS)",
   "color": "#117a65",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 164,
   "deviceIds": [
    103,
    8,
    31,
    32
   ]
  },
  {
   "id": 78,
   "space": 14,
   "description": "M. BEDROOM RECEPTACLES - AFCI",
   "color": "#884ea0",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 188,
   "deviceIds": [
    52,
    51,
    50,
    49,
    48,
    47
   ]
  },
  {
   "id": 79,
   "space": 15,
   "description": "M. SUITE LIGHTS / FANS / EXHAUST - AFCI",
   "color": "#b03a2e",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 278,
   "deviceIds": [
    54,
    44,
    43,
    40,
    39,
    37,
    36,
    35,
    33,
    34,
    42
   ]
  },
  {
   "id": 80,
   "space": 16,
   "description": "BEDROOM #2 RECEPTACLES - AFCI",
   "color": "#1a5276",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 178,
   "deviceIds": [
    5,
    4,
    1,
    2,
    3
   ]
  },
  {
   "id": 81,
   "space": 17,
   "description": "BED #2 / BATH #2 LIGHTS + SMOKES - AFCI",
   "color": "#7e5109",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 163,
   "deviceIds": [
    9,
    11,
    10,
    6,
    23,
    22,
    21,
    20
   ]
  },
  {
   "id": 82,
   "space": 18,
   "description": "GATHERING / DINING / FOYER RECEPTS",
   "color": "#0e6655",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 253,
   "deviceIds": [
    57,
    56,
    27,
    26,
    25,
    16,
    15,
    100
   ]
  },
  {
   "id": 83,
   "space": 19,
   "description": "KITCHEN / DINING / GATHERING LIGHTS",
   "color": "#922b21",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 328,
   "deviceIds": [
    90,
    80,
    78,
    76,
    77,
    79,
    18,
    13,
    24,
    29
   ]
  },
  {
   "id": 84,
   "space": 20,
   "description": "FOYER / ENTRY LIGHTS + SMOKES",
   "color": "#154360",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 143,
   "deviceIds": [
    63,
    62,
    61,
    60,
    58,
    59
   ]
  },
  {
   "id": 85,
   "space": 21,
   "description": "BEDROOM #3 RECEPTACLES - AFCI",
   "color": "#784212",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 164,
   "deviceIds": [
    118,
    93,
    92,
    94,
    95
   ]
  },
  {
   "id": 86,
   "space": 22,
   "description": "BED #3 / BATH #3 LIGHTS + SMOKES - AFCI",
   "color": "#145a32",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 161,
   "deviceIds": [
    104,
    106,
    105,
    97,
    99,
    101,
    102
   ]
  },
  {
   "id": 87,
   "space": 23,
   "description": "BEDROOM #4 RECEPTACLES - AFCI",
   "color": "#4a235a",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 177,
   "deviceIds": [
    110,
    109,
    108,
    111,
    112,
    113
   ]
  },
  {
   "id": 88,
   "space": 24,
   "description": "BEDROOM #4 LIGHTS + SMOKE - AFCI",
   "color": "#7b241c",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 60,
   "deviceIds": [
    114,
    116
   ]
  },
  {
   "id": 89,
   "space": 25,
   "description": "GARAGE / EXTERIOR GFI RECEPTS",
   "color": "#1b4f72",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 223,
   "deviceIds": [
    135,
    134,
    136,
    133,
    65,
    131,
    117
   ]
  },
  {
   "id": 90,
   "space": 26,
   "description": "GARAGE / EXTERIOR LIGHTS",
   "color": "#641e16",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 198,
   "deviceIds": [
    140,
    139,
    138,
    137
   ]
  },
  {
   "id": 91,
   "space": 27,
   "description": "LAUNDRY LIGHTS + SMOKE",
   "color": "#0b5345",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 106,
   "deviceIds": [
    125,
    126,
    124
   ]
  },
  {
   "id": 92,
   "space": 28,
   "description": "GATHERING ROOM RECEPTACLE CIRCUIT - TV OUTLET ON ITS ROOM RECEPTACLE CIRCUIT, 15A AFCI, SINGLE-AREA HOMERUN",
   "color": "#c0392b",
   "breakerAmps": 15,
   "poles": 1,
   "wire": "14/2",
   "loadVa": null,
   "cableFt": 66,
   "deviceIds": [
    28
   ]
  },
  {
   "id": 93,
   "space": 29,
   "description": "M. BEDROOM RECEPTACLE CIRCUIT - TV OUTLET ON ITS ROOM RECEPTACLE CIRCUIT, 20A AFCI/DUAL-FUNCTION, ONE CIRCUIT PER BEDROOM",
   "color": "#2471a3",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 58,
   "deviceIds": [
    53
   ]
  },
  {
   "id": 94,
   "space": 30,
   "description": "BEDROOM #3 RECEPTACLE CIRCUIT - TV OUTLET ON ITS ROOM RECEPTACLE CIRCUIT, 20A AFCI/DUAL-FUNCTION, ONE CIRCUIT PER BEDROOM",
   "color": "#229954",
   "breakerAmps": 20,
   "poles": 1,
   "wire": "12/2",
   "loadVa": null,
   "cableFt": 60,
   "deviceIds": [
    96
   ]
  }
 ],
 "devices": [
  {
   "id": 1,
   "devKey": "b2_r1",
   "kind": "rec",
   "room": "Bedroom #2",
   "x": 0.03,
   "y": 0.012,
   "circuitId": 80,
   "chainOrder": 2
  },
  {
   "id": 2,
   "devKey": "b2_r2",
   "kind": "rec",
   "room": "Bedroom #2",
   "x": 0.1,
   "y": 0.008,
   "circuitId": 80,
   "chainOrder": 3
  },
  {
   "id": 3,
   "devKey": "b2_r3",
   "kind": "rec",
   "room": "Bedroom #2",
   "x": 0.2,
   "y": 0.008,
   "circuitId": 80,
   "chainOrder": 4
  },
  {
   "id": 4,
   "devKey": "b2_r4",
   "kind": "rec",
   "room": "Bedroom #2",
   "x": 0.035,
   "y": 0.07,
   "circuitId": 80,
   "chainOrder": 1
  },
  {
   "id": 5,
   "devKey": "b2_r5",
   "kind": "rec",
   "room": "Bedroom #2",
   "x": 0.055,
   "y": 0.138,
   "circuitId": 80,
   "chainOrder": 0
  },
  {
   "id": 6,
   "devKey": "b2_fan",
   "kind": "fan",
   "room": "Bedroom #2",
   "x": 0.105473,
   "y": 0.095914,
   "circuitId": 81,
   "chainOrder": 3
  },
  {
   "id": 7,
   "devKey": "b2_sw",
   "kind": "sw",
   "room": "Bedroom #2",
   "x": 0.038,
   "y": 0.126,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 8,
   "devKey": "bath2_gfi",
   "kind": "gfi",
   "room": "Bath #2",
   "x": 0.325,
   "y": 0.075,
   "circuitId": 77,
   "chainOrder": 1
  },
  {
   "id": 9,
   "devKey": "bath2_van",
   "kind": "van",
   "room": "Bath #2",
   "x": 0.335,
   "y": 0.052,
   "circuitId": 81,
   "chainOrder": 0
  },
  {
   "id": 10,
   "devKey": "bath2_can",
   "kind": "can",
   "room": "Bath #2",
   "x": 0.257005,
   "y": 0.021752,
   "circuitId": 81,
   "chainOrder": 2
  },
  {
   "id": 11,
   "devKey": "bath2_exh",
   "kind": "exh",
   "room": "Bath #2",
   "x": 0.275,
   "y": 0.014,
   "circuitId": 81,
   "chainOrder": 1
  },
  {
   "id": 12,
   "devKey": "bath2_sw",
   "kind": "sw",
   "room": "Bath #2",
   "x": 0.24,
   "y": 0.018,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 13,
   "devKey": "lanai_fan",
   "kind": "fan",
   "room": "Rear Lanai",
   "x": 0.449109,
   "y": 0.041258,
   "circuitId": 83,
   "chainOrder": 7
  },
  {
   "id": 14,
   "devKey": "lanai_sw",
   "kind": "sw",
   "room": "Rear Lanai",
   "x": 0.415,
   "y": 0.048,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 15,
   "devKey": "lanai_rec",
   "kind": "rec",
   "room": "Rear Lanai",
   "x": 0.325843,
   "y": 0.055016,
   "circuitId": 82,
   "chainOrder": 6,
   "censusNote": "CENSUS (Rev 5): RECEPTACLE — NOT one of the two rear-lanai recessed lights. Moved to its own A7 source position this round (REC-015-SOURCE, vector 11695). The two rear-lanai recessed points are now RECORDED as source candidates lanai_lt_r (device 145) and lanai_lt_l (device 146) — SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED; they do not count as verified lighting coverage until a human verifies them. Do not count this receptacle as lighting coverage."
  },
  {
   "id": 16,
   "devKey": "din_rec",
   "kind": "rec",
   "room": "Dining",
   "x": 0.356327,
   "y": 0.092710,
   "circuitId": 82,
   "chainOrder": 5
  },
  {
   "id": 17,
   "devKey": "din_sw",
   "kind": "sw",
   "room": "Dining",
   "x": 0.576217,
   "y": 0.174064,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 18,
   "devKey": "din_can",
   "kind": "can",
   "room": "Dining",
   "x": 0.449109,
   "y": 0.163667,
   "circuitId": 83,
   "chainOrder": 6
  },
  {
   "id": 19,
   "devKey": "chime",
   "kind": "lv",
   "room": "Dining",
   "label": "CHIME",
   "x": 0.325,
   "y": 0.09,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 20,
   "devKey": "corr_can1",
   "kind": "can",
   "room": "Hall",
   "x": 0.048939,
   "y": 0.213139,
   "circuitId": 81,
   "chainOrder": 7
  },
  {
   "id": 21,
   "devKey": "corr_can2",
   "kind": "can",
   "room": "Hall",
   "x": 0.125537,
   "y": 0.213139,
   "circuitId": 81,
   "chainOrder": 6
  },
  {
   "id": 22,
   "devKey": "attic1",
   "kind": "can",
   "room": "Hall",
   "label": "ATTIC",
   "x": 0.155799,
   "y": 0.203245,
   "circuitId": 81,
   "chainOrder": 5
  },
  {
   "id": 23,
   "devKey": "hall_sd1",
   "kind": "sd",
   "room": "Bedroom #2",
   "x": 0.142829,
   "y": 0.164704,
   "circuitId": 81,
   "chainOrder": 4
  },
  {
   "id": 24,
   "devKey": "hall_sd2",
   "kind": "sd",
   "room": "Hall",
   "x": 0.240877,
   "y": 0.164704,
   "circuitId": 83,
   "chainOrder": 8
  },
  {
   "id": 25,
   "devKey": "gat_r1",
   "kind": "rec",
   "room": "Gathering Room",
   "x": 0.219427,
   "y": 0.208428,
   "circuitId": 82,
   "chainOrder": 4
  },
  {
   "id": 26,
   "devKey": "gat_r2",
   "kind": "rec",
   "room": "Gathering Room",
   "x": 0.23,
   "y": 0.185,
   "circuitId": 82,
   "chainOrder": 3
  },
  {
   "id": 27,
   "devKey": "gat_r3",
   "kind": "rec",
   "room": "Gathering Room",
   "x": 0.23,
   "y": 0.26,
   "circuitId": 82,
   "chainOrder": 2
  },
  {
   "id": 28,
   "devKey": "gat_tv",
   "kind": "tv",
   "room": "Gathering Room",
   "x": 0.24,
   "y": 0.275,
   "circuitId": 92,
   "chainOrder": 0
  },
  {
   "id": 29,
   "devKey": "gat_fan",
   "kind": "fan",
   "room": "Gathering Room",
   "x": 0.340143,
   "y": 0.294368,
   "circuitId": 83,
   "chainOrder": 9
  },
  {
   "id": 30,
   "devKey": "gat_sw3",
   "kind": "sw",
   "room": "Gathering Room",
   "label": "3",
   "x": 0.573076,
   "y": 0.167703,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 31,
   "devKey": "mb_gfi1",
   "kind": "gfi",
   "room": "M. Bath",
   "x": 0.015,
   "y": 0.225,
   "circuitId": 77,
   "chainOrder": 2
  },
  {
   "id": 32,
   "devKey": "mb_gfi2",
   "kind": "gfi",
   "room": "M. Bath",
   "x": 0.015,
   "y": 0.335,
   "circuitId": 77,
   "chainOrder": 3
  },
  {
   "id": 33,
   "devKey": "mb_van1",
   "kind": "van",
   "room": "M. Bath",
   "x": 0.008,
   "y": 0.255,
   "circuitId": 79,
   "chainOrder": 8
  },
  {
   "id": 34,
   "devKey": "mb_van2",
   "kind": "van",
   "room": "M. Bath",
   "x": 0.008,
   "y": 0.315,
   "circuitId": 79,
   "chainOrder": 9
  },
  {
   "id": 35,
   "devKey": "mb_tub",
   "kind": "can",
   "room": "M. Bath",
   "x": 0.105029,
   "y": 0.276087,
   "circuitId": 79,
   "chainOrder": 7
  },
  {
   "id": 36,
   "devKey": "mb_shw",
   "kind": "can",
   "room": "M. Bath",
   "x": 0.182181,
   "y": 0.297195,
   "circuitId": 79,
   "chainOrder": 6
  },
  {
   "id": 37,
   "devKey": "mb_exh",
   "kind": "exh",
   "room": "M. Bath",
   "x": 0.09,
   "y": 0.315,
   "circuitId": 79,
   "chainOrder": 5
  },
  {
   "id": 38,
   "devKey": "mb_sw",
   "kind": "sw",
   "room": "M. Bath",
   "x": 0.055,
   "y": 0.345,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 39,
   "devKey": "wc_can",
   "kind": "can",
   "room": "M. Bath WC",
   "x": 0.159124,
   "y": 0.369472,
   "circuitId": 79,
   "chainOrder": 4
  },
  {
   "id": 40,
   "devKey": "wc_exh",
   "kind": "exh",
   "room": "M. Bath WC",
   "x": 0.18,
   "y": 0.35,
   "circuitId": 79,
   "chainOrder": 3
  },
  {
   "id": 41,
   "devKey": "wc_sw",
   "kind": "sw",
   "room": "M. Bath WC",
   "x": 0.145,
   "y": 0.325,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 42,
   "devKey": "clo_l1",
   "kind": "can",
   "room": "Closets",
   "x": 0.044838,
   "y": 0.426577,
   "circuitId": 79,
   "chainOrder": 10
  },
  {
   "id": 43,
   "devKey": "clo_l2",
   "kind": "can",
   "room": "Closets",
   "x": 0.165554,
   "y": 0.440712,
   "circuitId": 79,
   "chainOrder": 2
  },
  {
   "id": 44,
   "devKey": "clo_l3",
   "kind": "can",
   "room": "Closets",
   "x": 0.105473,
   "y": 0.443068,
   "circuitId": 79,
   "chainOrder": 1
  },
  {
   "id": 45,
   "devKey": "clo_sw1",
   "kind": "sw",
   "room": "Closets",
   "x": 0.075,
   "y": 0.465,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 46,
   "devKey": "clo_sw2",
   "kind": "sw",
   "room": "Closets",
   "x": 0.125,
   "y": 0.455,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 47,
   "devKey": "mbed_r1",
   "kind": "rec",
   "room": "M. Bedroom",
   "x": 0.012,
   "y": 0.545,
   "circuitId": 78,
   "chainOrder": 5
  },
  {
   "id": 48,
   "devKey": "mbed_r2",
   "kind": "rec",
   "room": "M. Bedroom",
   "x": 0.012,
   "y": 0.68,
   "circuitId": 78,
   "chainOrder": 4
  },
  {
   "id": 49,
   "devKey": "mbed_r3",
   "kind": "rec",
   "room": "M. Bedroom",
   "x": 0.05,
   "y": 0.735,
   "circuitId": 78,
   "chainOrder": 3
  },
  {
   "id": 50,
   "devKey": "mbed_r4",
   "kind": "rec",
   "room": "M. Bedroom",
   "x": 0.155,
   "y": 0.735,
   "circuitId": 78,
   "chainOrder": 2
  },
  {
   "id": 51,
   "devKey": "mbed_r5",
   "kind": "rec",
   "room": "M. Bedroom",
   "x": 0.21,
   "y": 0.695,
   "circuitId": 78,
   "chainOrder": 1
  },
  {
   "id": 52,
   "devKey": "mbed_r6",
   "kind": "rec",
   "room": "M. Bedroom",
   "x": 0.225,
   "y": 0.575,
   "circuitId": 78,
   "chainOrder": 0
  },
  {
   "id": 53,
   "devKey": "mbed_tv",
   "kind": "tv",
   "room": "M. Bedroom",
   "x": 0.205,
   "y": 0.595,
   "circuitId": 93,
   "chainOrder": 0
  },
  {
   "id": 54,
   "devKey": "mbed_fan",
   "kind": "fan",
   "room": "M. Bedroom",
   "x": 0.105473,
   "y": 0.599117,
   "circuitId": 79,
   "chainOrder": 0
  },
  {
   "id": 55,
   "devKey": "mbed_sw",
   "kind": "sw",
   "room": "M. Bedroom",
   "x": 0.215,
   "y": 0.55,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 56,
   "devKey": "foy_r1",
   "kind": "rec",
   "room": "Foyer",
   "x": 0.365,
   "y": 0.595,
   "circuitId": 82,
   "chainOrder": 1
  },
  {
   "id": 57,
   "devKey": "foy_r2",
   "kind": "rec",
   "room": "Foyer",
   "x": 0.475,
   "y": 0.595,
   "circuitId": 82,
   "chainOrder": 0
  },
  {
   "id": 58,
   "devKey": "foy_can1",
   "kind": "can",
   "room": "Foyer",
   "x": 0.287822,
   "y": 0.509219,
   "circuitId": 84,
   "chainOrder": 4
  },
  {
   "id": 59,
   "devKey": "foy_can2",
   "kind": "can",
   "room": "Foyer",
   "x": 0.433146,
   "y": 0.509219,
   "circuitId": 84,
   "chainOrder": 5
  },
  {
   "id": 60,
   "devKey": "foy_sd",
   "kind": "sd",
   "room": "Foyer",
   "x": 0.240877,
   "y": 0.511858,
   "circuitId": 84,
   "chainOrder": 3
  },
  {
   "id": 61,
   "devKey": "hall_sd3",
   "kind": "sd",
   "room": "Hall",
   "x": 0.142829,
   "y": 0.511858,
   "circuitId": 84,
   "chainOrder": 2
  },
  {
   "id": 62,
   "devKey": "ent_l1",
   "kind": "can",
   "room": "Front Entry",
   "x": 0.302232,
   "y": 0.63747,
   "circuitId": 84,
   "chainOrder": 1
  },
  {
   "id": 63,
   "devKey": "ent_l2",
   "kind": "can",
   "room": "Front Entry",
   "x": 0.418625,
   "y": 0.63747,
   "circuitId": 84,
   "chainOrder": 0
  },
  {
   "id": 64,
   "devKey": "ent_sw",
   "kind": "sw",
   "room": "Front Entry",
   "x": 0.345,
   "y": 0.595,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 65,
   "devKey": "porch_wp",
   "kind": "wp",
   "room": "Front Entry",
   "x": 0.235,
   "y": 0.665,
   "circuitId": 89,
   "chainOrder": 4
  },
  {
   "id": 66,
   "devKey": "bell",
   "kind": "lv",
   "room": "Foyer",
   "label": "BELL",
   "x": 0.35,
   "y": 0.625,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 67,
   "devKey": "foy_sw3",
   "kind": "sw",
   "room": "Foyer",
   "label": "3",
   "x": 0.225,
   "y": 0.475,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 68,
   "devKey": "k_sa_e1",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.617712,
   "y": 0.246404,
   "circuitId": 67,
   "chainOrder": 3
  },
  {
   "id": 69,
   "devKey": "k_sa_e2",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.617712,
   "y": 0.269019,
   "circuitId": 67,
   "chainOrder": 2
  },
  {
   "id": 70,
   "devKey": "k_sa_e3",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.617601,
   "y": 0.296064,
   "circuitId": 67,
   "chainOrder": 1
  },
  {
   "id": 71,
   "devKey": "k_sa_e4",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.617269,
   "y": 0.305770,
   "circuitId": 67,
   "chainOrder": 0
  },
  {
   "id": 72,
   "devKey": "k_sa_s1",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.617712,
   "y": 0.328669,
   "circuitId": 68,
   "chainOrder": 1
  },
  {
   "id": 73,
   "devKey": "k_sa_s2",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.617712,
   "y": 0.355619,
   "circuitId": 68,
   "chainOrder": 0
  },
  {
   "id": 74,
   "devKey": "k_isl_g1",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.515,
   "y": 0.205,
   "circuitId": 68,
   "chainOrder": 3
  },
  {
   "id": 75,
   "devKey": "k_isl_g2",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.515,
   "y": 0.325,
   "circuitId": 68,
   "chainOrder": 2
  },
  {
   "id": 76,
   "devKey": "k_can_i1",
   "kind": "ceiling_fixture_outlet",
   "room": "Kitchen",
   "x": 0.478595,
   "y": 0.254602,
   "circuitId": 83,
   "chainOrder": 3,
   "censusNote": "CENSUS (Rev 5): Ceiling Fixture Outlet — the A7 legend's GENERIC ceiling fixture outlet (ERRATA-01, owner-adjudicated). NOT a pendant and NOT a recessed can; the legend does not select hardware, and fixture/product selection stays HOLD. Register kind is ceiling_fixture_outlet (converted from can at Rev 5); Rev 4's 'pendant' typing is SUPERSEDED. Position source-registered at Rev 4 (A7 index 9681)."
  },
  {
   "id": 77,
   "devKey": "k_can_i2",
   "kind": "ceiling_fixture_outlet",
   "room": "Kitchen",
   "x": 0.478595,
   "y": 0.289656,
   "circuitId": 83,
   "chainOrder": 4,
   "censusNote": "CENSUS (Rev 5): Ceiling Fixture Outlet — the A7 legend's GENERIC ceiling fixture outlet (ERRATA-01, owner-adjudicated). NOT a pendant and NOT a recessed can; the legend does not select hardware, and fixture/product selection stays HOLD. Register kind is ceiling_fixture_outlet (converted from can at Rev 5); Rev 4's 'pendant' typing is SUPERSEDED. Repositioned to its A7 vector centre this round (PLAC-077)."
  },
  {
   "id": 78,
   "devKey": "k_can_i3",
   "kind": "ceiling_fixture_outlet",
   "room": "Kitchen",
   "x": 0.478595,
   "y": 0.324711,
   "circuitId": 83,
   "chainOrder": 2,
   "censusNote": "CENSUS (Rev 5): Ceiling Fixture Outlet — the A7 legend's GENERIC ceiling fixture outlet (ERRATA-01, owner-adjudicated). NOT a pendant and NOT a recessed can; the legend does not select hardware, and fixture/product selection stays HOLD. Register kind is ceiling_fixture_outlet (converted from can at Rev 5); Rev 4's 'pendant' typing is SUPERSEDED. Repositioned to its A7 vector centre this round (PLAC-078)."
  },
  {
   "id": 79,
   "devKey": "k_can_e1",
   "kind": "can",
   "room": "Kitchen",
   "x": 0.588559,
   "y": 0.258465,
   "circuitId": 83,
   "chainOrder": 5
  },
  {
   "id": 80,
   "devKey": "k_can_e2",
   "kind": "can",
   "room": "Kitchen",
   "x": 0.588559,
   "y": 0.344406,
   "circuitId": 83,
   "chainOrder": 1
  },
  {
   "id": 81,
   "devKey": "range",
   "kind": "appl",
   "room": "Kitchen",
   "label": "RANGE",
   "x": 0.613281,
   "y": 0.313197,
   "circuitId": 65,
   "chainOrder": 0
  },
  {
   "id": 82,
   "devKey": "micro",
   "kind": "appl",
   "room": "Kitchen",
   "label": "MICRO",
   "x": 0.613537,
   "y": 0.263821,
   "circuitId": 66,
   "chainOrder": 0
  },
  {
   "id": 83,
   "devKey": "dw",
   "kind": "appl",
   "room": "Kitchen",
   "label": "DW",
   "x": 0.565,
   "y": 0.225,
   "circuitId": 70,
   "chainOrder": 0
  },
  {
   "id": 84,
   "devKey": "disp",
   "kind": "appl",
   "room": "Kitchen",
   "label": "DISP",
   "x": 0.545,
   "y": 0.245,
   "circuitId": 71,
   "chainOrder": 0
  },
  {
   "id": 85,
   "devKey": "disp_sw",
   "kind": "sw",
   "room": "Kitchen",
   "x": 0.578,
   "y": 0.292,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 86,
   "devKey": "frig1",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.53,
   "y": 0.415,
   "circuitId": 69,
   "chainOrder": 1,
   "censusNote": "CENSUS (Rev 5): GFI RECEPTACLE — NOT a fridge-area ceiling light. The source's separate fridge-area recessed point is now RECORDED as source candidate k_can_fridge (device 148) — SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED; it does not count as verified lighting coverage until a human verifies it."
  },
  {
   "id": 87,
   "devKey": "frig2",
   "kind": "gfi",
   "room": "Kitchen",
   "x": 0.575,
   "y": 0.415,
   "circuitId": 69,
   "chainOrder": 0,
   "censusNote": "CENSUS (Rev 5): GFI RECEPTACLE — NOT a fridge-area ceiling light. The source's separate fridge-area recessed point is now RECORDED as source candidate k_can_fridge (device 148) — SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED; it does not count as verified lighting coverage until a human verifies it."
  },
  {
   "id": 88,
   "devKey": "k_sw",
   "kind": "sw",
   "room": "Kitchen",
   "x": 0.525,
   "y": 0.43,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 89,
   "devKey": "k_sw2",
   "kind": "sw",
   "room": "Kitchen",
   "x": 0.618340,
   "y": 0.229112,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 90,
   "devKey": "pantry_lt",
   "kind": "can",
   "room": "Pantry",
   "x": 0.580245,
   "y": 0.391522,
   "circuitId": 83,
   "chainOrder": 0,
   "censusNote": "CENSUS (Rev 5): The pantry's ONE recessed can — the only mapped pantry light point; repositioned to its A7 vector centre this round (PLAC-090, vector 9424). The separate fridge-area recessed point is recorded as source candidate k_can_fridge (device 148) — unverified, no circuit assigned."
  },
  {
   "id": 91,
   "devKey": "pantry_sw",
   "kind": "sw",
   "room": "Pantry",
   "x": 0.665,
   "y": 0.355,
   "circuitId": null,
   "chainOrder": 0,
   "censusNote": "CENSUS (Rev 4): SWITCH — a control, NOT a lighting fixture; do not count as a fixture / lighting coverage."
  },
  {
   "id": 92,
   "devKey": "b3_r1",
   "kind": "rec",
   "room": "Bedroom #3",
   "x": 0.645,
   "y": 0.085,
   "circuitId": 85,
   "chainOrder": 2
  },
  {
   "id": 93,
   "devKey": "b3_r2",
   "kind": "rec",
   "room": "Bedroom #3",
   "x": 0.65,
   "y": 0.105,
   "circuitId": 85,
   "chainOrder": 1
  },
  {
   "id": 94,
   "devKey": "b3_r3",
   "kind": "rec",
   "room": "Bedroom #3",
   "x": 0.72,
   "y": 0.135,
   "circuitId": 85,
   "chainOrder": 3
  },
  {
   "id": 95,
   "devKey": "b3_r4",
   "kind": "rec",
   "room": "Bedroom #3",
   "x": 0.826444,
   "y": 0.045028,
   "circuitId": 85,
   "chainOrder": 4
  },
  {
   "id": 96,
   "devKey": "b3_tv",
   "kind": "tv",
   "room": "Bedroom #3",
   "x": 0.826444,
   "y": 0.129837,
   "circuitId": 94,
   "chainOrder": 0
  },
  {
   "id": 97,
   "devKey": "b3_fan",
   "kind": "fan",
   "room": "Bedroom #3",
   "x": 0.709607,
   "y": 0.09271,
   "circuitId": 86,
   "chainOrder": 3
  },
  {
   "id": 98,
   "devKey": "b3_sw",
   "kind": "sw",
   "room": "Bedroom #3",
   "x": 0.645,
   "y": 0.13,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 99,
   "devKey": "b3_sd",
   "kind": "sd",
   "room": "Bedroom #3",
   "x": 0.618876,
   "y": 0.134455,
   "circuitId": 86,
   "chainOrder": 4
  },
  {
   "id": 100,
   "devKey": "hall_r",
   "kind": "rec",
   "room": "Hall",
   "x": 0.674468,
   "y": 0.177708,
   "circuitId": 82,
   "chainOrder": 7,
   "assignmentStatus": "UNAPPROVED PROPOSAL — DRAFT assignment to Space 18 — Gathering/Dining/Foyer Recepts; pending SABC/TV classification, laundry alternatives and added-load/capacity review"
  },
  {
   "id": 101,
   "devKey": "hall_sd4",
   "kind": "sd",
   "room": "Hall",
   "x": 0.618932,
   "y": 0.20904,
   "circuitId": 86,
   "chainOrder": 5
  },
  {
   "id": 102,
   "devKey": "hall_can",
   "kind": "can",
   "room": "Hall",
   "x": 0.654404,
   "y": 0.24075,
   "circuitId": 86,
   "chainOrder": 6
  },
  {
   "id": 103,
   "devKey": "bath3_gfi",
   "kind": "gfi",
   "room": "Bath #3",
   "x": 0.755,
   "y": 0.26,
   "circuitId": 77,
   "chainOrder": 0
  },
  {
   "id": 104,
   "devKey": "bath3_van",
   "kind": "van",
   "room": "Bath #3",
   "x": 0.79,
   "y": 0.265,
   "circuitId": 86,
   "chainOrder": 0
  },
  {
   "id": 105,
   "devKey": "bath3_tub",
   "kind": "can",
   "room": "Bath #3",
   "x": 0.810259,
   "y": 0.254036,
   "circuitId": 86,
   "chainOrder": 2
  },
  {
   "id": 106,
   "devKey": "bath3_exh",
   "kind": "exh",
   "room": "Bath #3",
   "x": 0.815,
   "y": 0.225,
   "circuitId": 86,
   "chainOrder": 1
  },
  {
   "id": 107,
   "devKey": "bath3_sw",
   "kind": "sw",
   "room": "Bath #3",
   "x": 0.765,
   "y": 0.24,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 108,
   "devKey": "b4_r1",
   "kind": "rec",
   "room": "Bedroom #4",
   "x": 0.7,
   "y": 0.45,
   "circuitId": 87,
   "chainOrder": 2
  },
  {
   "id": 109,
   "devKey": "b4_r2",
   "kind": "rec",
   "room": "Bedroom #4",
   "x": 0.755,
   "y": 0.515,
   "circuitId": 87,
   "chainOrder": 1
  },
  {
   "id": 110,
   "devKey": "b4_r3",
   "kind": "rec",
   "room": "Bedroom #4",
   "x": 0.83,
   "y": 0.515,
   "circuitId": 87,
   "chainOrder": 0
  },
  {
   "id": 111,
   "devKey": "b4_r4",
   "kind": "rec",
   "room": "Bedroom #4",
   "x": 0.826444,
   "y": 0.384926,
   "circuitId": 87,
   "chainOrder": 3
  },
  {
   "id": 112,
   "devKey": "b4_r5",
   "kind": "rec",
   "room": "Bedroom #4",
   "x": 0.826444,
   "y": 0.469736,
   "circuitId": 87,
   "chainOrder": 4
  },
  {
   "id": 113,
   "devKey": "b4_tv",
   "kind": "tv",
   "room": "Bedroom #4",
   "x": 0.715,
   "y": 0.465,
   "circuitId": 87,
   "chainOrder": 5,
   "assignmentStatus": "UNAPPROVED PROPOSAL — DRAFT assignment to Space 23 — Bedroom #4 Receptacles – AFCI; pending SABC/TV classification, laundry alternatives and added-load/capacity review"
  },
  {
   "id": 114,
   "devKey": "b4_fan",
   "kind": "fan",
   "room": "Bedroom #4",
   "x": 0.729339,
   "y": 0.421017,
   "circuitId": 88,
   "chainOrder": 0
  },
  {
   "id": 115,
   "devKey": "b4_sw",
   "kind": "sw",
   "room": "Bedroom #4",
   "x": 0.75,
   "y": 0.305,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 116,
   "devKey": "b4_sd",
   "kind": "sd",
   "room": "Bedroom #4",
   "x": 0.654404,
   "y": 0.363347,
   "circuitId": 88,
   "chainOrder": 1
  },
  {
   "id": 117,
   "devKey": "b4_wp",
   "kind": "wp",
   "room": "Bedroom #4",
   "x": 0.847062,
   "y": 0.503754,
   "circuitId": 89,
   "chainOrder": 6
  },
  {
   "id": 118,
   "devKey": "hall_r2",
   "kind": "rec",
   "room": "Hall",
   "x": 0.705,
   "y": 0.365,
   "circuitId": 85,
   "chainOrder": 0
  },
  {
   "id": 119,
   "devKey": "w_rec",
   "kind": "gfi",
   "room": "Laundry",
   "x": 0.614387,
   "y": 0.441466,
   "circuitId": 73,
   "chainOrder": 1
  },
  {
   "id": 120,
   "devKey": "d_rec",
   "kind": "appl",
   "room": "Laundry",
   "label": "DRYER",
   "x": 0.614830,
   "y": 0.490938,
   "circuitId": 72,
   "chainOrder": 0
  },
  {
   "id": 121,
   "devKey": "lt_gfi",
   "kind": "gfi",
   "room": "Laundry",
   "x": 0.630460,
   "y": 0.531741,
   "circuitId": 73,
   "chainOrder": 0
  },
  {
   "id": 122,
   "devKey": "lau_gfi",
   "kind": "gfi",
   "room": "Laundry",
   "x": 0.545,
   "y": 0.51,
   "circuitId": 73,
   "chainOrder": 2
  },
  {
   "id": 123,
   "devKey": "lau_r",
   "kind": "rec",
   "room": "Laundry",
   "x": 0.545,
   "y": 0.475,
   "circuitId": 73,
   "chainOrder": 3,
   "assignmentStatus": "UNAPPROVED PROPOSAL — DRAFT assignment to Space 9 — Washer / Laundry Recepts; pending SABC/TV classification, laundry alternatives and added-load/capacity review"
  },
  {
   "id": 124,
   "devKey": "lau_can1",
   "kind": "can",
   "room": "Laundry",
   "x": 0.564837,
   "y": 0.462103,
   "circuitId": 91,
   "chainOrder": 2
  },
  {
   "id": 125,
   "devKey": "lau_can2",
   "kind": "can",
   "room": "Laundry",
   "x": 0.564837,
   "y": 0.524202,
   "circuitId": 91,
   "chainOrder": 0
  },
  {
   "id": 126,
   "devKey": "lau_sd",
   "kind": "sd",
   "room": "Laundry",
   "x": 0.565336,
   "y": 0.494754,
   "circuitId": 91,
   "chainOrder": 1
  },
  {
   "id": 127,
   "devKey": "lau_sw",
   "kind": "sw",
   "room": "Laundry",
   "x": 0.615,
   "y": 0.575,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 128,
   "devKey": "lau_sw3",
   "kind": "sw",
   "room": "Laundry",
   "label": "3",
   "x": 0.55,
   "y": 0.465,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 129,
   "devKey": "ah",
   "kind": "appl",
   "room": "A/H Closet",
   "label": "A/H",
   "x": 0.695917,
   "y": 0.538102,
   "circuitId": 75,
   "chainOrder": 0
  },
  {
   "id": 130,
   "devKey": "wh",
   "kind": "appl",
   "room": "WH Closet",
   "label": "WH",
   "x": 0.809465,
   "y": 0.536233,
   "circuitId": 74,
   "chainOrder": 0
  },
  {
   "id": 131,
   "devKey": "wh_gfi",
   "kind": "gfi",
   "room": "WH Closet",
   "x": 0.719140,
   "y": 0.533625,
   "circuitId": 89,
   "chainOrder": 5
  },
  {
   "id": 132,
   "devKey": "cond",
   "kind": "appl",
   "room": "Exterior",
   "label": "A/C",
   "x": 0.867569,
   "y": 0.534112,
   "circuitId": 76,
   "chainOrder": 0
  },
  {
   "id": 133,
   "devKey": "gar_r1",
   "kind": "gfi",
   "room": "Garage",
   "x": 0.56,
   "y": 0.735,
   "circuitId": 89,
   "chainOrder": 3
  },
  {
   "id": 134,
   "devKey": "gar_r2",
   "kind": "gfi",
   "room": "Garage",
   "x": 0.827774,
   "y": 0.694670,
   "circuitId": 89,
   "chainOrder": 1
  },
  {
   "id": 135,
   "devKey": "gar_irr",
   "kind": "gfi",
   "room": "Garage",
   "x": 0.827774,
   "y": 0.748948,
   "circuitId": 89,
   "chainOrder": 0
  },
  {
   "id": 136,
   "devKey": "opener",
   "kind": "appl",
   "room": "Garage",
   "label": "OPEN",
   "x": 0.735,
   "y": 0.755,
   "circuitId": 89,
   "chainOrder": 2
  },
  {
   "id": 137,
   "devKey": "gar_attic",
   "kind": "can",
   "room": "Garage",
   "label": "ATTIC",
   "x": 0.671253,
   "y": 0.631534,
   "circuitId": 90,
   "chainOrder": 3
  },
  {
   "id": 138,
   "devKey": "gar_ext1",
   "kind": "can",
   "room": "Garage",
   "x": 0.51839,
   "y": 0.858635,
   "circuitId": 90,
   "chainOrder": 2
  },
  {
   "id": 139,
   "devKey": "gar_ext2",
   "kind": "can",
   "room": "Garage",
   "x": 0.823229,
   "y": 0.858635,
   "circuitId": 90,
   "chainOrder": 1
  },
  {
   "id": 140,
   "devKey": "flood",
   "kind": "appl",
   "room": "Exterior",
   "label": "FLOOD",
   "x": 0.965,
   "y": 0.865,
   "circuitId": 90,
   "chainOrder": 0,
   "censusNote": "PROPOSED (Rev 3/Rev 4; still HOLD at Rev 5 — H-FLOOD140): flood point — no A7 / owner-addition evidence verified; stands as PROPOSED, not source-confirmed."
  },
  {
   "id": 141,
   "devKey": "gar_sw",
   "kind": "sw",
   "room": "Garage",
   "x": 0.545,
   "y": 0.585,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 142,
   "devKey": "panel",
   "kind": "panel",
   "room": "Garage",
   "x": 0.819955,
   "y": 0.737274,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 143,
   "devKey": "meter",
   "kind": "meter",
   "room": "Exterior",
   "x": 0.853659,
   "y": 0.737274,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 144,
   "devKey": "alarm_feed",
   "kind": "vnode",
   "room": "Garage",
   "label": "ALARM AREA FEED — UNSWITCHED · PROPOSED DRAFT",
   "x": 0.786394,
   "y": 0.780555,
   "circuitId": null,
   "chainOrder": 0
  },
  {
   "id": 145,
   "devKey": "lanai_lt_r",
   "kind": "can",
   "room": "Rear Lanai",
   "x": 0.512848,
   "y": 0.041258,
   "circuitId": null,
   "chainOrder": 0,
   "candidateStatus": "SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED",
   "censusNote": "CENSUS (Rev 5): SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED. Rear-lanai RIGHT recessed light (NEW-SRC-9492, A7 vector 9492), added from the 39-light source census. Verified=0 in the register — a human verifies it on E-1 before it counts as lighting coverage. Control intent HOLD."
  },
  {
   "id": 146,
   "devKey": "lanai_lt_l",
   "kind": "can",
   "room": "Rear Lanai",
   "x": 0.38537,
   "y": 0.041258,
   "circuitId": null,
   "chainOrder": 0,
   "candidateStatus": "SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED",
   "censusNote": "CENSUS (Rev 5): SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED. Rear-lanai LEFT recessed light (NEW-SRC-9526, A7 vector 9526), added from the 39-light source census. It sits ~10 px from lanai_rec (device 15) — that device is a RECEPTACLE, not this light and not a duplicate. Verified=0 — a human verifies it on E-1 before it counts. Control intent HOLD."
  },
  {
   "id": 147,
   "devKey": "k_can_sink",
   "kind": "can",
   "room": "Kitchen",
   "x": 0.52615,
   "y": 0.296724,
   "circuitId": null,
   "chainOrder": 0,
   "candidateStatus": "SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED",
   "censusNote": "CENSUS (Rev 5): SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED. Kitchen sink-area recessed light (NEW-SRC-9532, A7 vector 9532) — the third east-kitchen source point, previously UNMAPPED. Verified=0 — a human verifies it on E-1 before it counts. Control intent: the kitchen recessed group's source intent extends to it as INTENT ONLY (CTL-19) — no leg is created for it."
  },
  {
   "id": 148,
   "devKey": "k_can_fridge",
   "kind": "can",
   "room": "Kitchen",
   "x": 0.512294,
   "y": 0.39859,
   "circuitId": null,
   "chainOrder": 0,
   "candidateStatus": "SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED",
   "censusNote": "CENSUS (Rev 5): SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED. Fridge-area recessed light (NEW-SRC-9536, A7 vector 9536), previously UNMAPPED; frig1/frig2 (devices 86/87) are GFI receptacles, not this light. Verified=0 — a human verifies it on E-1 before it counts. Control intent HOLD."
  },
  {
   "id": 149,
   "devKey": "gar_linear",
   "kind": "linear_fixture",
   "room": "Garage",
   "x": 0.669701,
   "y": 0.663106,
   "circuitId": null,
   "chainOrder": 0,
   "candidateStatus": "SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED",
   "censusNote": "CENSUS (Rev 5): SOURCE CANDIDATE — UNVERIFIED, NO CIRCUIT ASSIGNED. Garage LINEAR fixture (NEW-SRC-11207-LINEAR, A7 vectors 11207–11210, source linear symbol) — previously ABSENT from the register. Distinct from gar_attic (device 137, a different symbol). Verified=0 — a human verifies it on E-1 before it counts. The garage source control arc points at THIS fixture, not attic 137 (CTL-16) — its control stays HOLD; leg 36 is unchanged."
  }
 ],
 "legs": [
  {
   "id": 1,
   "circuitId": 81,
   "from": 7,
   "to": 6,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-01): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:BED2-FAN). Bedroom 2 switch bank → fan prewire. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 2,
   "circuitId": 81,
   "from": 12,
   "to": 9,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-09): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:BATH2). Bath 2 vanity source control. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 3,
   "circuitId": 81,
   "from": 12,
   "to": 11,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-08): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:BATH2). Bath 2 exhaust-fan source control. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 4,
   "circuitId": 81,
   "from": 12,
   "to": 10,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-07): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:BATH2). Bath 2 wet/tub light source control. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 5,
   "circuitId": 83,
   "from": 14,
   "to": 13,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-10): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:LANAI). Lanai bank → fan prewire (separate source arc). Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 6,
   "circuitId": 83,
   "from": 17,
   "to": 18,
   "kind": "leg"
  },
  {
   "id": 7,
   "circuitId": 83,
   "from": 30,
   "to": 29,
   "kind": "leg"
  },
  {
   "id": 8,
   "circuitId": 83,
   "from": 67,
   "to": 29,
   "kind": "leg"
  },
  {
   "id": 9,
   "circuitId": 79,
   "from": 38,
   "to": 33,
   "kind": "leg"
  },
  {
   "id": 10,
   "circuitId": 79,
   "from": 38,
   "to": 34,
   "kind": "leg"
  },
  {
   "id": 11,
   "circuitId": 79,
   "from": 38,
   "to": 35,
   "kind": "leg"
  },
  {
   "id": 12,
   "circuitId": 79,
   "from": 38,
   "to": 36,
   "kind": "leg"
  },
  {
   "id": 13,
   "circuitId": 79,
   "from": 38,
   "to": 37,
   "kind": "leg"
  },
  {
   "id": 14,
   "circuitId": 79,
   "from": 41,
   "to": 39,
   "kind": "leg"
  },
  {
   "id": 15,
   "circuitId": 79,
   "from": 41,
   "to": 40,
   "kind": "leg"
  },
  {
   "id": 16,
   "circuitId": 79,
   "from": 45,
   "to": 42,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-13): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:MASTER-CLOSET-LEFT). Master LEFT closet has its own source switch. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 17,
   "circuitId": 79,
   "from": 46,
   "to": 43,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-14): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:MASTER-CLOSET-RIGHT). Master RIGHT closet has its own source switch — distinct from the closet-ENTRY switch (see CTL-15 HOLD). Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 18,
   "circuitId": 79,
   "from": 46,
   "to": 44,
   "kind": "leg"
  },
  {
   "id": 19,
   "circuitId": 79,
   "from": 55,
   "to": 54,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-04): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:MASTER-FAN). Master bedroom switch bank → fan prewire. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 20,
   "circuitId": 83,
   "from": 88,
   "to": 76,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-20): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:KITCHEN-UPPER-AND-LOWER). Island three Ceiling Fixture Outlets share source control intent (legend semantic per ERRATA-01 — not pendants). Multiway terminal/conductor topology HOLD. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 21,
   "circuitId": 83,
   "from": 88,
   "to": 77,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-20): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:KITCHEN-UPPER-AND-LOWER). Island three Ceiling Fixture Outlets share source control intent (legend semantic per ERRATA-01 — not pendants). Multiway terminal/conductor topology HOLD. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 22,
   "circuitId": 83,
   "from": 88,
   "to": 78,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-20): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:KITCHEN-UPPER-AND-LOWER). Island three Ceiling Fixture Outlets share source control intent (legend semantic per ERRATA-01 — not pendants). Multiway terminal/conductor topology HOLD. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 23,
   "circuitId": 83,
   "from": 89,
   "to": 79,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-19): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:KITCHEN-UPPER-AND-LOWER). Kitchen recessed group source control intent; the group's third fixture is the sink-area endpoint added this round (NEW-SRC-9532) — the intent extends to it as intent only; NO leg is created for it. Multi-location terminal design HOLD. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 24,
   "circuitId": 83,
   "from": 89,
   "to": 80,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-19): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:KITCHEN-UPPER-AND-LOWER). Kitchen recessed group source control intent; the group's third fixture is the sink-area endpoint added this round (NEW-SRC-9532) — the intent extends to it as intent only; NO leg is created for it. Multi-location terminal design HOLD. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 25,
   "circuitId": 86,
   "from": 89,
   "to": 102,
   "kind": "leg"
  },
  {
   "id": 26,
   "circuitId": 71,
   "from": 85,
   "to": 84,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-06): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:DISPOSAL). Disposal switch → disposal symbol. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 27,
   "circuitId": 83,
   "from": 91,
   "to": 90,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-05): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:PANTRY). Pantry source switch → pantry recessed fixture (device 90 at its Rev 5 source position). Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 28,
   "circuitId": 86,
   "from": 98,
   "to": 97,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-02): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:BED3-FAN). Bedroom 3 switch bank → fan prewire. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 29,
   "circuitId": 86,
   "from": 107,
   "to": 104,
   "kind": "leg"
  },
  {
   "id": 30,
   "circuitId": 86,
   "from": 107,
   "to": 105,
   "kind": "leg"
  },
  {
   "id": 31,
   "circuitId": 86,
   "from": 107,
   "to": 106,
   "kind": "leg"
  },
  {
   "id": 32,
   "circuitId": 88,
   "from": 115,
   "to": 114,
   "kind": "leg",
   "legNote": "Rev 5 control intent (2026-11-08, CTL-03): SOURCE_SUPPORTED_CONTROL_INTENT_ONLY — the A7 dashed source arc supports this switch→load CONTROL INTENT only (source bank key A7:BANK:BED4-FAN). Bedroom 4 switch bank → fan prewire. Candidate bank identity UNCONFIRMED; electrical topology HOLD (terminals / mechanisms / neutrals / conductors / compatibility not issued). NOT installed wiring, NOT engineering approval. This leg's endpoints and circuit are unchanged."
  },
  {
   "id": 33,
   "circuitId": 91,
   "from": 127,
   "to": 124,
   "kind": "leg"
  },
  {
   "id": 34,
   "circuitId": 91,
   "from": 127,
   "to": 125,
   "kind": "leg"
  },
  {
   "id": 35,
   "circuitId": 91,
   "from": 128,
   "to": 124,
   "kind": "leg"
  },
  {
   "id": 36,
   "circuitId": 90,
   "from": 127,
   "to": 137,
   "kind": "leg",
   "legStatus": "SOURCE-CONTROL HOLD",
   "sourceConfirmed": false,
   "legNote": "This control leg (lau_sw → gar_attic) has NO source arc/terminal evidence — SOURCE-CONTROL / topology HOLD. The leg is KEPT in the draft register but flagged unverified in place (not silently deleted, not isolated as a proposal, and no replacement switch connection is invented)."
  },
  {
   "id": 37,
   "circuitId": 84,
   "from": 64,
   "to": 62,
   "kind": "leg"
  },
  {
   "id": 38,
   "circuitId": 84,
   "from": 64,
   "to": 63,
   "kind": "leg"
  },
  {
   "id": 39,
   "circuitId": 84,
   "from": 64,
   "to": 58,
   "kind": "leg"
  },
  {
   "id": 40,
   "circuitId": 84,
   "from": 64,
   "to": 59,
   "kind": "leg"
  },
  {
   "id": 41,
   "circuitId": 90,
   "from": 141,
   "to": 138,
   "kind": "leg"
  },
  {
   "id": 42,
   "circuitId": 90,
   "from": 141,
   "to": 139,
   "kind": "leg"
  },
  {
   "id": 43,
   "circuitId": 90,
   "from": 141,
   "to": 140,
   "kind": "leg"
  },
  {
   "id": 44,
   "circuitId": 83,
   "from": 30,
   "to": 67,
   "kind": "traveler",
   "legStatus": "TOPOLOGY HOLD",
   "sourceConfirmed": false,
   "legNote": "Traveler pair with valid switch-bank endpoints, but NO common/traveler/neutral map, mechanism/gang evidence or source-arc equivalence — TOPOLOGY HOLD. Two traveler edges do not prove a correct multiway system."
  },
  {
   "id": 45,
   "circuitId": 91,
   "from": 127,
   "to": 128,
   "kind": "traveler",
   "legStatus": "TOPOLOGY HOLD",
   "sourceConfirmed": false,
   "legNote": "Traveler pair with valid switch-bank endpoints, but NO common/traveler/neutral map, mechanism/gang evidence or source-arc equivalence — TOPOLOGY HOLD. Two traveler edges do not prove a correct multiway system."
  },
  {
   "id": 46,
   "circuitId": null,
   "from": 23,
   "to": 24,
   "kind": "alarm",
   "cableType": "14/3",
   "legStatus": "PROPOSED DRAFT",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "PROPOSED DRAFT interconnect — owner-directed alarm model (2026-11-08), structured Rev 3: cableType 14/3, sourceConfirmed=false, energized=false. ALTERNATIVE PROPOSED layer only — the detectors' active branch assignments (spaces 17/19/20/22/24/27) are the active design; this chain is not an implemented or supplied system. No conductor roles are claimed."
  },
  {
   "id": 47,
   "circuitId": null,
   "from": 24,
   "to": 60,
   "kind": "alarm",
   "cableType": "14/3",
   "legStatus": "PROPOSED DRAFT",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "PROPOSED DRAFT interconnect — owner-directed alarm model (2026-11-08), structured Rev 3: cableType 14/3, sourceConfirmed=false, energized=false. ALTERNATIVE PROPOSED layer only — the detectors' active branch assignments (spaces 17/19/20/22/24/27) are the active design; this chain is not an implemented or supplied system. No conductor roles are claimed."
  },
  {
   "id": 48,
   "circuitId": null,
   "from": 60,
   "to": 61,
   "kind": "alarm",
   "cableType": "14/3",
   "legStatus": "PROPOSED DRAFT",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "PROPOSED DRAFT interconnect — owner-directed alarm model (2026-11-08), structured Rev 3: cableType 14/3, sourceConfirmed=false, energized=false. ALTERNATIVE PROPOSED layer only — the detectors' active branch assignments (spaces 17/19/20/22/24/27) are the active design; this chain is not an implemented or supplied system. No conductor roles are claimed."
  },
  {
   "id": 49,
   "circuitId": null,
   "from": 61,
   "to": 99,
   "kind": "alarm",
   "cableType": "14/3",
   "legStatus": "PROPOSED DRAFT",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "PROPOSED DRAFT interconnect — owner-directed alarm model (2026-11-08), structured Rev 3: cableType 14/3, sourceConfirmed=false, energized=false. ALTERNATIVE PROPOSED layer only — the detectors' active branch assignments (spaces 17/19/20/22/24/27) are the active design; this chain is not an implemented or supplied system. No conductor roles are claimed."
  },
  {
   "id": 50,
   "circuitId": null,
   "from": 99,
   "to": 101,
   "kind": "alarm",
   "cableType": "14/3",
   "legStatus": "PROPOSED DRAFT",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "PROPOSED DRAFT interconnect — owner-directed alarm model (2026-11-08), structured Rev 3: cableType 14/3, sourceConfirmed=false, energized=false. ALTERNATIVE PROPOSED layer only — the detectors' active branch assignments (spaces 17/19/20/22/24/27) are the active design; this chain is not an implemented or supplied system. No conductor roles are claimed."
  },
  {
   "id": 51,
   "circuitId": null,
   "from": 101,
   "to": 116,
   "kind": "alarm",
   "cableType": "14/3",
   "legStatus": "PROPOSED DRAFT",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "PROPOSED DRAFT interconnect — owner-directed alarm model (2026-11-08), structured Rev 3: cableType 14/3, sourceConfirmed=false, energized=false. ALTERNATIVE PROPOSED layer only — the detectors' active branch assignments (spaces 17/19/20/22/24/27) are the active design; this chain is not an implemented or supplied system. No conductor roles are claimed."
  },
  {
   "id": 52,
   "circuitId": null,
   "from": 116,
   "to": 126,
   "kind": "alarm",
   "cableType": "14/3",
   "legStatus": "PROPOSED DRAFT",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "PROPOSED DRAFT interconnect — owner-directed alarm model (2026-11-08), structured Rev 3: cableType 14/3, sourceConfirmed=false, energized=false. ALTERNATIVE PROPOSED layer only — the detectors' active branch assignments (spaces 17/19/20/22/24/27) are the active design; this chain is not an implemented or supplied system. No conductor roles are claimed."
  },
  {
   "id": 53,
   "circuitId": null,
   "from": 144,
   "to": 23,
   "kind": "feed_candidate",
   "legStatus": "PROPOSED DRAFT — FEED/LISTING HOLD",
   "sourceConfirmed": false,
   "energized": false,
   "legNote": "Feed-CANDIDATE edge only — NOT a power edge and NOT an implemented feed. circuit=null (no feed circuit selected), energized=false. Feed-circuit selection: HOLD. Manufacturer compatibility + listing: HOLD. No single implemented feed is claimed for the proposed alarm layer."
  }
 ]
};
