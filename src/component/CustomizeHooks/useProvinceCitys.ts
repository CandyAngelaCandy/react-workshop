import { ProvinceName, City, PROVINCE_CITY_DATA } from "../../constant/citys";
import { useEffect, useState } from "react";

type DefaultProvince = ProvinceName | "";

const useProvinceCitys: (
  defaultProvince: DefaultProvince
) => [City[], (province: ProvinceName) => void] = (defaultProvince) => {
  const [province, setProvince] = useState(defaultProvince);
  const [citys, setCitys] = useState([] as City[]);

  useEffect(() => {
    if (province !== "") {
      setCitys(PROVINCE_CITY_DATA[province]);
    } else {
      setCitys([]);
    }
  }, [province]);

  return [citys, setProvince];
};

export default useProvinceCitys;
