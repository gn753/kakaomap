import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const 강남 = {
  x: "127.047377408384",
  y: "37.5173319258532",
};
const { x, y } = 강남;

export const getKeywordAsync = createAsyncThunk(
  "companys/getKeywordAsync",

  async (회사명) => {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?y=${y}&x=${x}&radius=20000&query=` +
        encodeURIComponent(회사명),
      {
        method: "GET",
        headers: {
          Authorization: "KakaoAK 19541ea01f4c165aadef26ddd5474d71",
        },
      }
    );
    if (response.ok) {
      const keyword = await response.json();
      console.log(keyword, "keyword");
      const { x, y } = keyword.documents[0];
      const newCompanyKeywords = {
        x: x,
        y: y,
      };
      return { newCompanyKeywords };
    }
  }
);

const keywordSlice = createSlice({
  name: "companys",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getKeywordAsync.pending]: (state, action) => {
      console.log("fetching 키워드 data 받아오는중...");
    },
    [getKeywordAsync.fulfilled]: (state, action) => {
      console.log("fetching 키워드 data 성공..");
      state.push(action.payload.newCompanyKeywords);
    },
  },
});

export default keywordSlice.reducer;
