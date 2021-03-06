import { markerdata } from "./dummyData2";
const { kakao } = window;
const mapInfoAPI = () => {
  let container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
    level: 5,
  };

  //map
  const map = new kakao.maps.Map(container, options);

  markerdata.forEach((el) => {
    // 마커를 생성합니다
    new kakao.maps.Marker({
      //마커가 표시 될 지도
      map: map,
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(el.lat, el.lng),
      //마커에 hover시 나타날 title
      title: el.title,
    });
  });

  // markerdata.forEach((el) => {
  //   var infowindow = new kakao.maps.InfoWindow({
  //     map: map, // 인포윈도우가 표시될 지도
  //     position: new kakao.maps.LatLng(el.lat, el.lng),
  //     content: ` <div style="width:150px;text-align:center;">${el.title}</div>`,
  //   });
  // });
};

export default mapInfoAPI;
