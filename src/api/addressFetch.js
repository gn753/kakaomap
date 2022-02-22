
export const addressFetch = async () => {
  const response = await fetch(
    "https://dapi.kakao.com/v2/local/search/address.json?query=" +
      encodeURIComponent("강남"),
    {
      method: "GET",
      headers: {
        Authorization: "KakaoAK 19541ea01f4c165aadef26ddd5474d71",
      },
    }
  );
  if (response.ok) {
    const localData = await response.json();
    console.log(localData,'loaclData');
    const { x, y } = localData.documents[0];
    console.log(x, y,'address 좌표');
    const jobKeywordFetch = async () => {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?y=${y}&x=${x}&radius=20000&query=` +
          encodeURIComponent("코드 스테이츠"),
        {
          method: "GET",
          headers: {
            Authorization: "KakaoAK 19541ea01f4c165aadef26ddd5474d71",
          },
        }
      );
      if (response.ok) {
        const keyword = await response.json();
        // console.log(keyword,'keyword');
        const { x, y } = localData.documents[0];
        // console.log(x, y,'keyword 좌표');
      }
    };
    jobKeywordFetch();
  }
};

