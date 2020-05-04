export type City = {
  name: string;
  id: string;
};

type ProvinceCitys = {
  [key in ProvinceName]: City[];
};

type ProvinceId = "110000" | "120000" | "130000" | "140000";

export type ProvinceName = "北京市" | "天津市" | "河北省" | "山西省";

export const PROVINCE_CITY_DATA: ProvinceCitys = {
  北京市: [{ name: "市辖区", id: "110100" }],
  天津市: [
    {
      name: "市辖区",
      id: "120100",
    },
  ],
  山西省: [
    { name: "太原市", id: "140100" },
    {
      name: "大同市",
      id: "140200",
    },
    {
      name: "阳泉市",
      id: "140300",
    },
  ],
  河北省: [
    { name: "石家庄市", id: "130100" },
    {
      name: "唐山市",
      id: "130200",
    },
    {
      name: "秦皇岛市",
      id: "130300",
    },
  ],
};

export const PROVINCE_META_DATA = [
  {
    name: "北京市",
    id: "110000",
  },
  {
    name: "天津市",
    id: "120000",
  },
  {
    name: "河北省",
    id: "130000",
  },
  {
    name: "山西省",
    id: "140000",
  },
];

export const PROVINCE_CITY_META_DATA: {
  [key in ProvinceId]: Array<{
    province: ProvinceName;
    name: string;
    id: string;
  }>;
} = {
  "110000": [
    {
      province: "北京市",
      name: "市辖区",
      id: "110100",
    },
  ],
  "120000": [
    {
      province: "天津市",
      name: "市辖区",
      id: "120100",
    },
  ],
  "130000": [
    {
      province: "河北省",
      name: "石家庄市",
      id: "130100",
    },
    {
      province: "河北省",
      name: "唐山市",
      id: "130200",
    },
    {
      province: "河北省",
      name: "秦皇岛市",
      id: "130300",
    },
    {
      province: "河北省",
      name: "邯郸市",
      id: "130400",
    },
    {
      province: "河北省",
      name: "邢台市",
      id: "130500",
    },
    {
      province: "河北省",
      name: "保定市",
      id: "130600",
    },
    {
      province: "河北省",
      name: "张家口市",
      id: "130700",
    },
    {
      province: "河北省",
      name: "承德市",
      id: "130800",
    },
    {
      province: "河北省",
      name: "沧州市",
      id: "130900",
    },
    {
      province: "河北省",
      name: "廊坊市",
      id: "131000",
    },
    {
      province: "河北省",
      name: "衡水市",
      id: "131100",
    },
    {
      province: "河北省",
      name: "省直辖县级行政区划",
      id: "139000",
    },
  ],
  "140000": [
    {
      province: "山西省",
      name: "太原市",
      id: "140100",
    },
    {
      province: "山西省",
      name: "大同市",
      id: "140200",
    },
    {
      province: "山西省",
      name: "阳泉市",
      id: "140300",
    },
    {
      province: "山西省",
      name: "长治市",
      id: "140400",
    },
    {
      province: "山西省",
      name: "晋城市",
      id: "140500",
    },
    {
      province: "山西省",
      name: "朔州市",
      id: "140600",
    },
    {
      province: "山西省",
      name: "晋中市",
      id: "140700",
    },
    {
      province: "山西省",
      name: "运城市",
      id: "140800",
    },
    {
      province: "山西省",
      name: "忻州市",
      id: "140900",
    },
    {
      province: "山西省",
      name: "临汾市",
      id: "141000",
    },
    {
      province: "山西省",
      name: "吕梁市",
      id: "141100",
    },
  ],
};
