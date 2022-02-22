import "./style.scss";
import { useEffect, useState } from "react";
import KakaoMap from "./components/KakaoMap";
import { getAddressAsync } from "./store/addressSlice";
import { getKeywordAsync } from "./store/keywordSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const addressDatas = useSelector((state) => state.address);
  const companyDatas = useSelector((state) => state.companys);
  
  // const 강남 = {
  //   x: "127.047377408384",
  //   y: "37.5173319258532",
  // };
  // const { x, y } = 강남;

  useEffect(() => {


    dispatch(getAddressAsync("강남역"));
    console.log(addressDatas, "지역 위치 데이터");
    dispatch(getKeywordAsync("코드스테이츠"));
    console.log(companyDatas, "회사위치 데이터");
  }, [dispatch]);

  return (
    <div className="App">
      <button>테스트</button>
      <KakaoMap />
    </div>
  );
}

export default App;
