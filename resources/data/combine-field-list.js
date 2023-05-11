//List of languages in which need to search
const languageCodes = ["EN"];
const dataFormatCodes = ["B", "D", "DA", "EPO", "O", "R", "L", "T"];

const getLanguagesListFromField = (field) => {
  let fieldLanguageArray = [];
  languageCodes.forEach((item) => {
    fieldLanguageArray.push(`${field}_${item}`);
  });

  return fieldLanguageArray;
};

const getDataFormatListFromField = (field) => {
  let fieldDataFormatArray = [];
  dataFormatCodes.forEach((item) => {
    fieldDataFormatArray.push(`${field}_${item}`);
  });

  return fieldDataFormatArray;
};

export const multipleFieldsShortCode = {
  PAPR: ["PN", "AN", "PRN"],
  PA: ["PN", "AN"],
  PPR: ["PN", "PRN"],
  APR: ["AN", "PRN"],
  AA: ["AO_EN", "AP_EN", "API_EN"],
  AB: getLanguagesListFromField("AB"),
  AG: getLanguagesListFromField("AG"),
  AGA: getLanguagesListFromField("AGA"),
  AGC: getLanguagesListFromField("AGC"),
  AGCT: getLanguagesListFromField("AGA"),
  AGN: getLanguagesListFromField("AG"),
  AIC: ["IPC", "CPC"],
  ALL: [
    ...getLanguagesListFromField("TI"),
    ...getLanguagesListFromField("AB"),
    ...getLanguagesListFromField("CL"),
    ...getLanguagesListFromField("DESC"),
  ],
  AN: getDataFormatListFromField("AN"),
  ANZ: getLanguagesListFromField("ANZ"),
  AO: getLanguagesListFromField("AO"),
  AOF: getLanguagesListFromField("AOF"),
  AP: getLanguagesListFromField("AP"),
  APA: getLanguagesListFromField("APA"),
  APC: getLanguagesListFromField("APA"),
  APCT: getLanguagesListFromField("APA"),
  APFI: getLanguagesListFromField("APFI"),
  APFO: getLanguagesListFromField("APFO"),
  APN: getLanguagesListFromField("APN"),
  APS: getLanguagesListFromField("APS"),
  AS: getLanguagesListFromField("AS"),
  ASA: getLanguagesListFromField("AA"),
  ASC: getLanguagesListFromField("AA"),
  ASCT: getLanguagesListFromField("AA"),
  ASD: getLanguagesListFromField("AS"),
  ASDC: getLanguagesListFromField("CAS"),
  ASN: getLanguagesListFromField("AO"),
  CLA: [...getLanguagesListFromField("CL"), ...getLanguagesListFromField("AB")],
  CAA: getLanguagesListFromField("CAA"),
  CAN: getLanguagesListFromField("CAN"),
  CAS: getLanguagesListFromField("CAS"),
  CD: [
    ...getLanguagesListFromField("CL"),
    ...getLanguagesListFromField("DESC"),
  ],
  CL: getLanguagesListFromField("CL"),
  CR: getLanguagesListFromField("CR"),
  CRA: getLanguagesListFromField("CRA"),
  DCL: getLanguagesListFromField("DCL"),
  DESC: getLanguagesListFromField("DESC"),
  DSEP: ["DSEP_CST", "DSEP_EST", "DSEP_VST", "DSEP_PST"],
  DSPCT: ["DSPCT_RGCN", "DSPCT_AOST", "DSPCT_RGNCN", "DSPCT_NT", "DSPCT_NDSCN"],
  EX: ["AEX", "PEX"],
  EXN: ["AEX", "PEX"],
  CA: getLanguagesListFromField("CA"),
  FCL: getLanguagesListFromField("FCL"),
  ICL: getLanguagesListFromField("ICL"),
  IN: getLanguagesListFromField("IN"),
  INA: getLanguagesListFromField("INA"),
  INC: getLanguagesListFromField("INA"),
  INCT: getLanguagesListFromField("INA"),
  INF: getLanguagesListFromField("INF"),
  INN: getLanguagesListFromField("IN"),
  IPC: ["IPC", "IPCR"],
  LC: ["LCM", "LCF"],
  LOC: ["LCM", "LCF"],
  PAN: [
    "PCT_B",
    "PCT_D",
    "PCT_DA",
    "PCT_EPO",
    "PCT_O",
    "PCT_R",
    "PCT_L",
    "PCT_T",
  ],
  PC: ["PNC"],
  PCI: ["BCP"],
  PCT: getDataFormatListFromField("PCT"),
  PCTN: ["PCTN_B"],
  PFC: ["DSPCT_NT"],
  PFD: ["PCTAD"],
  PFY: ["PCTAD"],
  PN: getDataFormatListFromField("PN"),
  PPD: ["PCTPD"],
  PPN: getDataFormatListFromField("PCTN"),
  PPY: ["PCTPD"],
  PRN: getDataFormatListFromField("PRN"),
  SS: [
    ...getLanguagesListFromField("TI"),
    ...getLanguagesListFromField("AB"),
    ...getLanguagesListFromField("CL"),
    ...getLanguagesListFromField("DESC"),
    "PN_B",
    "AN_B",
  ],
  TA: [...getLanguagesListFromField("TI"), ...getLanguagesListFromField("AB")],
  TAC: [
    ...getLanguagesListFromField("TI"),
    ...getLanguagesListFromField("AB"),
    ...getLanguagesListFromField("CL"),
  ],
  TC: [...getLanguagesListFromField("TI"), ...getLanguagesListFromField("CL")],
  TI: getLanguagesListFromField("TI"),
  USC: ["USM", "USD", "USF", "USFD"],
};
