// It is take from mapping because it will change in rare case
export const fieldTypeChecking = {
  AAN: {
    type: "nested",
    dynamic: "true",
    properties: {
      A1: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A2: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A3: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A4: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A5: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A6: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      "CN ": {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PCODE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SEQ: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ST: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  AAP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AAPN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AAPO: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AAPS: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AA_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AA_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AA_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AA_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AA_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AA_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AA_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AB_CN: {
    type: "text",
  },
  AB_DE: {
    type: "text",
  },
  AB_EN: {
    type: "text",
  },
  AB_ES: {
    type: "text",
  },
  AB_FR: {
    type: "text",
  },
  AB_JP: {
    type: "text",
  },
  AB_KR: {
    type: "text",
  },
  AC: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ACC: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ACN: {
    type: "keyword",
  },
  AD: {
    type: "date",
    format: "basic_date",
    ignore_malformed: true,
  },
  AEX: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AGAN: {
    type: "nested",
    dynamic: "true",
    properties: {
      A1: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A2: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A3: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A4: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A5: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A6: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      "CN ": {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PCODE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SEQ: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ST: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  AGA_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AGA_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AGA_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AGA_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AGA_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AGA_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AGA_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AG_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AG_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AG_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AG_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AG_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AG_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AG_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ALD: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ANZ_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ANZ_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ANZ_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ANZ_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ANZ_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ANZ_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ANZ_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AN_B: {
    type: "keyword",
  },
  AN_D: {
    type: "keyword",
  },
  AN_DA: {
    type: "keyword",
  },
  AN_EPO: {
    type: "keyword",
  },
  AN_L: {
    type: "keyword",
  },
  AN_O: {
    type: "keyword",
  },
  AN_T: {
    type: "keyword",
  },
  AOF_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AOF_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AOF_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AOF_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AOF_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AOF_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AOF_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AO_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AO_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AO_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AO_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AO_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AO_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AO_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APAN: {
    type: "nested",
    properties: {
      A1: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A2: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A3: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A4: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A5: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A6: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APSN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PCODE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SEQ: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ST: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  APA_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APA_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APA_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APA_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APA_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APA_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APA_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APCN: {
    type: "keyword",
  },
  APFI_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFI_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFI_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFI_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFI_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFI_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFI_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFO_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFO_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFO_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFO_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFO_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFO_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APFO_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  API_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  API_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  API_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  API_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  API_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  API_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  API_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APN_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APN_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APN_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APN_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APN_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APN_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APN_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APS_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APS_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APS_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APS_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APS_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APS_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APS_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  APT: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AP_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AP_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AP_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AP_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AP_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AP_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AP_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ASPN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ASPO: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ASPS: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AS_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AS_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AS_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AS_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AS_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AS_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AS_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  AY: {
    type: "keyword",
  },
  BCN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  BCNN: {
    properties: {
      TI: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      URL: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  BCP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  BCPN: {
    type: "nested",
    dynamic: "true",
    properties: {
      ADT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      CTBY: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PDT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  BON: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  BOV: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAAN: {
    type: "nested",
    dynamic: "true",
    properties: {
      A1: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A2: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A3: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A4: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A5: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A6: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      "CN ": {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PCODE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SEQ: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ST: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  CAA_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAA_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAA_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAA_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAA_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAA_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAA_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAN_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAN_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAN_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAN_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAN_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAN_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAN_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAS_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAS_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAS_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAS_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAS_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAS_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CAS_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CA_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CA_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CA_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CA_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CA_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CA_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CA_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CF: {
    type: "keyword",
  },
  CFID: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CFN: {
    type: "nested",
    dynamic: "true",
    properties: {
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PN: {
        type: "keyword",
      },
    },
  },
  CLCN: {
    type: "keyword",
  },
  CLN: {
    type: "nested",
    dynamic: "true",
    properties: {
      CL: {
        type: "text",
      },
      DEPCLREF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ID: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      INDP: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      NUM: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  CL_CN: {
    type: "text",
  },
  CL_DE: {
    type: "text",
  },
  CL_EN: {
    type: "text",
  },
  CL_ES: {
    type: "text",
  },
  CL_FR: {
    type: "text",
  },
  CL_JP: {
    type: "text",
  },
  CL_KR: {
    type: "text",
  },
  CPC: {
    type: "keyword",
  },
  CPC12: {
    type: "keyword",
  },
  CPC4: {
    type: "keyword",
  },
  CPC8: {
    type: "keyword",
  },
  CPCD: {
    type: "keyword",
  },
  CPCO: {
    type: "keyword",
  },
  CPCP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CPCV: {
    type: "keyword",
  },
  CRAN: {
    type: "nested",
    dynamic: "true",
    properties: {
      A1: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A2: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A3: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A4: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A5: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A6: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      "CN ": {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ORGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PCODE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ST: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  CRA_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CRA_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CRA_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CRA_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CRA_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CRA_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CRA_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CR_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CR_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CR_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CR_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CR_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CR_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  CR_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DCLN: {
    type: "nested",
    dynamic: "true",
    properties: {
      CL: {
        type: "text",
      },
      CLREF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      NUM: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  DCL_CN: {
    type: "text",
  },
  DCL_DE: {
    type: "text",
  },
  DCL_EN: {
    type: "text",
  },
  DCL_ES: {
    type: "text",
  },
  DCL_FR: {
    type: "text",
  },
  DCL_JP: {
    type: "text",
  },
  DCL_KR: {
    type: "text",
  },
  DESC_CN: {
    type: "text",
  },
  DESC_DE: {
    type: "text",
  },
  DESC_EN: {
    type: "text",
  },
  DESC_ES: {
    type: "text",
  },
  DESC_FR: {
    type: "text",
  },
  DESC_JP: {
    type: "text",
  },
  DESC_KR: {
    type: "text",
  },
  DF: {
    type: "keyword",
  },
  DFID: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DFN: {
    type: "nested",
    dynamic: "true",
    properties: {
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PN: {
        type: "keyword",
      },
    },
  },
  DSEP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSEP_CST: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSEP_EST: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSEP_PST: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSEP_VST: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSPCT_AOST: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSPCT_NDSCN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSPCT_NT: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSPCT_RGCN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DSPCT_RGNCN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  DST: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ECL: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ECLD: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ED: {
    type: "date",
    format: "basic_date",
    ignore_malformed: true,
  },
  EDN: {
    type: "nested",
    properties: {
      CN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
    },
  },
  EF: {
    type: "keyword",
  },
  EFID: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  EFN: {
    type: "nested",
    dynamic: "true",
    properties: {
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PN: {
        type: "keyword",
      },
    },
  },
  EPRD: {
    type: "date",
    format: "basic_date",
    ignore_malformed: true,
  },
  EPRND: {
    type: "nested",
    dynamic: "true",
    properties: {
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PRN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  EPRY: {
    type: "keyword",
  },
  EX: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  FCL_CN: {
    type: "text",
  },
  FCL_DE: {
    type: "text",
  },
  FCL_EN: {
    type: "text",
  },
  FCL_ES: {
    type: "text",
  },
  FCL_FR: {
    type: "text",
  },
  FCL_JP: {
    type: "text",
  },
  FCL_KR: {
    type: "text",
  },
  FCP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  FCPN: {
    type: "nested",
    dynamic: "true",
    properties: {
      ADT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PDT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  FP: {
    type: "nested",
    dynamic: "true",
    properties: {
      EDE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EDT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  GOI: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  ICLN: {
    type: "nested",
    dynamic: "true",
    properties: {
      INDCL: {
        type: "text",
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      NUM: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  ICL_CN: {
    type: "text",
  },
  ICL_DE: {
    type: "text",
  },
  ICL_EN: {
    type: "text",
  },
  ICL_ES: {
    type: "text",
  },
  ICL_FR: {
    type: "text",
  },
  ICL_JP: {
    type: "text",
  },
  ICL_KR: {
    type: "text",
  },
  INAN: {
    type: "nested",
    properties: {
      A1: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A2: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A3: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A4: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A5: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A6: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LG: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PCODE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SEQ: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ST: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  INA_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INA_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INA_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INA_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INA_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INA_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INA_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INCN: {
    type: "keyword",
  },
  INF_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INF_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INF_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INF_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INF_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INF_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  INF_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IN_CN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IN_DE: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IN_EN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IN_ES: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IN_FR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IN_JP: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IN_KR: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  IPC: {
    type: "keyword",
  },
  IPC12: {
    type: "keyword",
  },
  IPC4: {
    type: "keyword",
  },
  IPC8: {
    type: "keyword",
  },
  IPCD: {
    type: "keyword",
  },
  IPCR: {
    type: "keyword",
  },
  IPCR12: {
    type: "keyword",
  },
  IPCR4: {
    type: "keyword",
  },
  IPCR8: {
    type: "keyword",
  },
  IPCRD: {
    type: "keyword",
  },
  IPCRV: {
    type: "keyword",
  },
  JCL: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  LCF: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  LCM: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  LE: {
    type: "nested",
    properties: {
      CNCND: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRA: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRK: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPD: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      CRPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DDBAPID: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DDBPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DSA: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DSSTDESC: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DSSTEC: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      E1: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      E2: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EC: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ED: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      EFD: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      EFT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ESTA: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EXTD: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      FD: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      FPY: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      FTD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      IN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      IPC: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LDST: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      LGDESC: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      NO: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ON: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PD: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PMTDT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RQN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPCN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      STI: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      WRD: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
    },
  },
  LIT: {
    type: "nested",
    dynamic: "true",
    properties: {
      EDE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EDT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  LST: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  MF: {
    type: "keyword",
  },
  MFID: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  MFN: {
    type: "nested",
    dynamic: "true",
    properties: {
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PN: {
        type: "keyword",
      },
    },
  },
  OH: {
    type: "nested",
    dynamic: "true",
    properties: {
      EDE: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EDT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      EN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  PCL: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTAD: {
    type: "date",
    format: "basic_date",
    ignore_malformed: true,
  },
  PCTN_B: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTN_D: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTN_DA: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTN_EPO: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTN_L: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTN_O: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTN_T: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTPC: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCTPD: {
    type: "date",
    format: "basic_date",
    ignore_malformed: true,
  },
  PCT_B: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCT_D: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCT_DA: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCT_EPO: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCT_L: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCT_O: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PCT_T: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PD: {
    type: "date",
    format: "basic_date",
    ignore_malformed: true,
  },
  PEX: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PKC: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PL: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PNC: {
    type: "keyword",
  },
  PN_B: {
    type: "keyword",
  },
  PN_D: {
    type: "keyword",
  },
  PN_DA: {
    type: "keyword",
  },
  PN_EPO: {
    type: "keyword",
  },
  PN_L: {
    type: "keyword",
  },
  PN_O: {
    type: "keyword",
  },
  PN_T: {
    type: "keyword",
  },
  PRC: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRD: {
    type: "date",
    format: "basic_date",
    ignore_malformed: true,
  },
  PRND: {
    type: "nested",
    dynamic: "true",
    properties: {
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PRN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  PRNDC: {
    type: "nested",
    dynamic: "true",
    properties: {
      CTRY: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PRN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  PRN_B: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRN_D: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRN_DA: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRN_EPO: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRN_L: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRN_O: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRN_T: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PRY: {
    type: "keyword",
  },
  PT: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PTA: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PTS: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PVN: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  PY: {
    type: "keyword",
  },
  RDN: {
    type: "nested",
    dynamic: "true",
    properties: {
      A371CHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371CHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371PD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371PGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371PGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371PN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371PPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371PPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      A371PS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ACHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ACHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      APS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CGT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CRPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      CTX: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DRPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PAD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PAN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      PAS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RC: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REC: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RECHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RECHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RED: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REOGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      REPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      ROGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      RRMPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      SPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMCHD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMCHN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMPD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMPGD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMPGN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMPN: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMPPCT: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMPPCTDD: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      UMPS: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
    },
  },
  SC: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  SF: {
    type: "keyword",
  },
  SFID: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  SFN: {
    type: "nested",
    dynamic: "true",
    properties: {
      DF: {
        type: "text",
        fields: {
          keyword: {
            type: "keyword",
            ignore_above: 256,
          },
        },
      },
      DT: {
        type: "date",
        format: "basic_date",
        ignore_malformed: true,
      },
      PN: {
        type: "keyword",
      },
    },
  },
  TI_CN: {
    type: "text",
  },
  TI_DE: {
    type: "text",
  },
  TI_EN: {
    type: "text",
  },
  TI_ES: {
    type: "text",
  },
  TI_FR: {
    type: "text",
  },
  TI_JP: {
    type: "text",
  },
  TI_KR: {
    type: "text",
  },
  USD: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  USF: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  USFD: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  USM: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
  USMS: {
    type: "text",
    fields: {
      keyword: {
        type: "keyword",
        ignore_above: 256,
      },
    },
  },
};
