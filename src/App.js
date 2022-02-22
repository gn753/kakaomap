import "./style.scss";
import { useEffect, useState } from "react";
import KakaoMap from "./components/KakaoMap";
import { getAddressAsync } from "./store/addressSlice";
import { getKeywordAsync } from "./store/keywordSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const addressDatas = useSelector((state) => state.address);

  const 강남 = {
    x: "127.047377408384",
    y: "37.5173319258532",
  };
  const { x, y } = 강남;

  useEffect(() => {
    dispatch(getAddressAsync("강남역"));
    getKeywordAsync(x, y, "코드스테이츠");
  }, [dispatch]);

  return (
    <div className="App">
      <button>테스트</button>
      <KakaoMap />
    </div>
  );
}

export default App;
