// 더미데이터
export const dummyData = {
  jobs: {
    count: 4,
    start: 0,
    total: "4",
    job: [
      {
        url: "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=42338312&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
        active: 1,
        company: {
          detail: {
            href: "http://www.saramin.co.kr/zf_user/company-info/view?csn=1028113061&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
            name: "(주)솔트룩스",
          },
        },
        position: {
          title: "JAVA 개발자 직원 채용",
          industry: {
            code: "301",
            name: "솔루션·SI·ERP·CRM",
          },
          location: {
            code: "101000,101010",
            name: "서울 &gt; 서울전체,서울 &gt; 강남구",
          },
          "job-type": {
            code: "1",
            name: "정규직",
          },
          "job-mid-code": {
            code: "2,15",
            name: "IT개발·데이터,디자인",
          },
          "job-code": {
            code: "82,87,91,116,124,136,143,181,182,184,188,191,194,199,205,206,229,235,236,253,263,300,318,1502,1529,1594,1616,108,125,1583",
            name: "SI·시스템통합,소프트웨어개발,솔루션업체,데이터분석가,웹개발,퍼블리셔,빅데이터,웹표준·웹접근성,클라우드,APM,AI(인공지능),Windows,.NET,액션스크립트,파워빌더,Ajax,ASP,C++,C언어,HTML,Java,Javascript,MFC,OracleDB,Tensorflow,XML,웹디자인,UI/UX디자인,드림위버,Sketch,딥러닝,음성인식,합성",
          },
          "experience-level": {
            code: 1,
            min: 0,
            max: 0,
            name: "신입",
          },
          "required-education-level": {
            code: "7",
            name: "대학졸업(2,3년)이상",
          },
        },
        keyword: "SI·시스템통합,소프트웨어개발,솔루션업체",
        salary: {
          code: "99",
          name: "면접후 결정",
        },
        id: "42338312",
        "posting-timestamp": "1644908233",
        "modification-timestamp": "1644918722",
        "opening-timestamp": "1644937200",
        "expiration-timestamp": "1645973999",
        "close-type": {
          code: "1",
          name: "접수마감일",
        },
      },
      {
        url: "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=41963382&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
        active: 1,
        company: {
          detail: {
            href: "http://www.saramin.co.kr/zf_user/company-info/view?csn=5730094372&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
            name: "(주)해커스교육그룹",
          },
        },
        position: {
          title: "2022년 해커스 교육그룹 [신입/경력] 각 부문별 채용공고",
          industry: {
            code: "602",
            name: "학원·어학원",
          },
          location: {
            code: "101010,101120,101150,101230,102040,102220",
            name: "서울 &gt; 강남구,서울 &gt; 동작구,서울 &gt; 서초구,서울 &gt; 종로구,경기 &gt; 고양시 일산동구,경기 &gt; 수원시",
          },
          "job-type": {
            code: "1,10,11,2,4,9",
            name: "정규직,계약직 (정규직 전환가능),인턴직 (정규직 전환가능),계약직,인턴직,프리랜서",
          },
          "job-mid-code": {
            code: "2,3,4,5,8,9,10,11,12,13,14,15,16,18,19,20,21,22",
            name: "IT개발·데이터,회계·세무·재무,총무·법무·사무,인사·노무·HRD,영업·판매·무역,연구·R&D,서비스,생산,상품기획·MD,미디어·문화·스포츠,마케팅·홍보·조사,디자인,기획·전략,구매·자재·물류,교육,공공·복지,고객상담·TM,건설·건축",
          },
          "job-code": {
            code: "84,86,87,88,90,91,92,95,99,104,106,114,124,182,195,204,205,206,229,234,235,236,246,257,263,268,293,305,327,329,342,345,358,363,364,366,371,383,388,396,399,405,407,411,414,418,423,427,429,435,437,440,442,449,756,768,790,810,956,1034,1212,1301,1310,1317,1318,1335,1373,1374,1379,1380,1384,1386,1407,1412,1413,1420,1421,1422,1424,1428,1432,1436,1440,1451,1460,1462,1465,1470,1483,1484,1491,1492,1496,1498,1500,1502,1504,1519,1521,1526,1528,1529,1530,1545,1573,1580,1603,1604,1605,1614,1625,1627,1633,1635,1636,1637,1641,1649,1664,1665,1750,1754,1755,1808,1818,1820,1825,1826,1827,1829,1851,1853,1880,1890,1901,1907,1911,1912,1924,1936,1946,1972,1973,1975,1976,1981,1982,1995,2001,2005,2015,2016,2020,2037,2040,2074,2081,2093,2105,2116,2120,2140,2141,89,127,149,168,276,2197,2220,372,385,426,2203,754,801,985,1113,1248,1266,1279,1425,1435,2201,2210,1461,1555,1565,1596,1600,1634,2205,1662,1663,1690,1751,1763,1795,1813,1814,1831,1843,1875,1887,1894,1914,1918,1930,1947,1977,1993",
            name: "어학원,유학원,백엔드/서버개발,앱개발,웹개발,웹마스터,정보보안,퍼블리셔,프론트엔드,DBA,QA/테스터,네트워크,데이터마이닝,방화벽,웹표준·웹접근성,Windows,Android,C#,C++,C언어,HTML,iOS,Java,Javascript,Linux,MySQL,OracleDB,PHP,SQL,Unix,세무사,회계사,법인결산,세무기장,원가회계,자체기장,재무기획,재무회계,회계결산,법무사,사무직,총무,교육행정,사무보조,사이트관리,인/허가,자산관리,콘텐츠관리,Excel,PowerPoint,경영지원,ER(노무관리),HRD,면접/인터뷰,복리후생,인사행정,가맹점관리,매체영업,학원영업,R&D,출력/제본/복사,전기제어,기획MD,작가,통/번역,AD(아트디렉터),AE(광고기획자),교열,영상편집,영어,인제스트/인코딩,일본어,중국어,촬영,유튜브,마케팅기획,마케팅전략,콘텐츠기획,광고마케팅,광고PD,기업홍보,바이럴마케팅,온라인마케팅,콘텐츠에디터,광고캠페인,시장조사,옥외광고,키워드광고,IMC,광고디자인,그래픽디자인,배너디자인,북디자인,시각디자인,애니메이터,영상디자인,웹디자인,일러스트레이터,편집디자인,표지디자인,BI디자인,CI디자인,UI/UX디자인,2D디자인,모션그래픽,카탈로그,포스터,파이널컷,프리미어,플래시,PhotoShop,경영기획,교육기획,사업기획,서비스기획,앱기획,웹기획,출판기획,PM(프로젝트매니저),신사업기획,신사업발굴,구매관리,자재관리,재고관리,보육교사,퍼포먼스강사,학원강사,교수설계,교육운영,교육컨텐츠개발,교재개발,학습상담,학원생관리,입시학원,논술/글쓰기,세계사,한국사,사회,한국어,사회복지사,직업상담사,상담원,아웃바운드,인바운드,텔레마케터,고객관리,교육상담,주문상담,해피콜,가스기능사,공인중개사,공조냉동기사,내선전공,안전관리자,전기기사,가스설비,건축전기,도시가스,부동산,소방/방재,시설관리,전기설비,전기시공,유지보수,인프라,ERP,SAP,R,회계,재무,변호사,영업,B2B,연구원,카페,판매전략,SNS,디지털마케팅,콘텐츠마케팅,마케팅,홍보,언론홍보,썸네일,자막,베가스,일러스트,상품기획,기획,스토리보드,UI/UX,물류관리,SCM,조교,청소년지도사,평생교육사,이러닝,과학,디자인,CS,전화상담",
          },
          "experience-level": {
            code: 3,
            min: 0,
            max: 0,
            name: "신입/경력",
          },
          "required-education-level": {
            code: "0",
            name: "학력무관",
          },
        },
        keyword: "어학원,유학원",
        salary: {
          code: "99",
          name: "면접후 결정",
        },
        id: "41963382",
        "posting-timestamp": "1640765757",
        "modification-timestamp": "1643257598",
        "opening-timestamp": "1640962800",
        "expiration-timestamp": "1646060399",
        "close-type": {
          code: "1",
          name: "접수마감일",
        },
      },
      {
        url: "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=41963298&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
        active: 1,
        company: {
          detail: {
            href: "http://www.saramin.co.kr/zf_user/company-info/view?csn=5730094372&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
            name: "(주)해커스교육그룹",
          },
        },
        position: {
          title: "[PHP/React Native/iOS/웹퍼블리셔] 각 부문별 경력직 모집",
          industry: {
            code: "602",
            name: "학원·어학원",
          },
          location: {
            code: "101010,101150,101180",
            name: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
          },
          "job-type": {
            code: "1",
            name: "정규직",
          },
          "job-mid-code": {
            code: "2,11,14,15,16",
            name: "IT개발·데이터,생산,마케팅·홍보·조사,디자인,기획·전략",
          },
          "job-code": {
            code: "81,82,83,84,86,87,88,90,91,92,95,99,100,104,106,111,116,121,124,127,130,132,136,145,149,157,164,168,169,174,182,192,195,201,204,209,229,234,235,236,243,246,250,254,255,257,259,260,263,268,269,270,277,278,279,280,293,294,298,305,320,1018,1118,1420,1488,1502,1529,1636,1637,1649,1683,1690,89,142,205,220,222,233,239,276,282,297,1611",
            name: "어학원,영어학원,기술지원,데이터분석가,데이터엔지니어,백엔드/서버개발,앱개발,웹개발,웹마스터,정보보안,퍼블리셔,프론트엔드,DBA,QA/테스터,SE(시스템엔지니어),네트워크,데이터마이닝,모의해킹,빅데이터,악성코드,웹표준·웹접근성,인프라,정보통신,취약점진단,클라우드,DBMS,ERP,ISMS,RDBMS,SAP,SDK,VDI,Windows,ABAP,Android,AWS,C#,CSS,HTML,iOS,Java,Javascript,Kotlin,Linux,MariaDB,MongoDB,MSSQL,MySQL,NoSQL,Objective-C,OracleDB,PHP,PL/SQL,PostgreSQL,React,React-Native,ReactJS,Redis,SQL,SQLite,Swift,Unix,임베디드리눅스,시스템설계,MES,콘텐츠기획,모바일디자인,웹디자인,UI/UX디자인,앱기획,웹기획,PM(프로젝트매니저),ISMP,UI/UX,유지보수,API,C++,Flutter,Git,Ionic,jQuery,R,RestAPI,SVN",
          },
          "experience-level": {
            code: 3,
            min: 0,
            max: 0,
            name: "신입/경력",
          },
          "required-education-level": {
            code: "0",
            name: "학력무관",
          },
        },
        keyword: "어학원,영어학원",
        salary: {
          code: "99",
          name: "면접후 결정",
        },
        id: "41963298",
        "posting-timestamp": "1640765374",
        "modification-timestamp": "1644311627",
        "opening-timestamp": "1640962800",
        "expiration-timestamp": "1646060399",
        "close-type": {
          code: "1",
          name: "접수마감일",
        },
      },
      {
        url: "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=41962655&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
        active: 1,
        company: {
          detail: {
            href: "http://www.saramin.co.kr/zf_user/company-info/view?csn=5730094372&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
            name: "(주)해커스교육그룹",
          },
        },
        position: {
          title: "[DBA/SE/SAP/QA/정보보안/취약점진단] 신입 및 경력직 모집",
          industry: {
            code: "602",
            name: "학원·어학원",
          },
          location: {
            code: "101010,101150,101180",
            name: "서울 &gt; 강남구,서울 &gt; 서초구,서울 &gt; 송파구",
          },
          "job-type": {
            code: "1",
            name: "정규직",
          },
          "job-mid-code": {
            code: "2,11,14,15,16",
            name: "IT개발·데이터,생산,마케팅·홍보·조사,디자인,기획·전략",
          },
          "job-code": {
            code: "81,82,83,84,86,87,88,90,91,92,95,99,100,104,106,111,116,121,124,127,130,132,136,145,149,157,164,168,174,182,192,195,201,204,209,229,234,235,236,246,250,254,255,257,259,263,268,269,270,293,294,305,320,1018,1118,1420,1488,1502,1529,1636,1637,1649,1683,1690,89,118,205,272,276,280,1002,1113",
            name: "어학원,영어학원,기술지원,데이터분석가,데이터엔지니어,백엔드/서버개발,앱개발,웹개발,웹마스터,정보보안,퍼블리셔,프론트엔드,DBA,QA/테스터,SE(시스템엔지니어),네트워크,데이터마이닝,모의해킹,빅데이터,악성코드,웹표준·웹접근성,인프라,정보통신,취약점진단,클라우드,DBMS,ERP,ISMS,RDBMS,SAP,VDI,Windows,ABAP,Android,AWS,C#,CSS,HTML,iOS,Java,Javascript,Linux,MariaDB,MongoDB,MSSQL,MySQL,NoSQL,OracleDB,PHP,PL/SQL,PostgreSQL,SQL,SQLite,Unix,임베디드리눅스,시스템설계,MES,콘텐츠기획,모바일디자인,웹디자인,UI/UX디자인,앱기획,웹기획,PM(프로젝트매니저),ISMP,UI/UX,유지보수,솔루션,C++,Python,R,Redis,QA",
          },
          "experience-level": {
            code: 3,
            min: 0,
            max: 0,
            name: "신입/경력",
          },
          "required-education-level": {
            code: "0",
            name: "학력무관",
          },
        },
        keyword: "어학원,영어학원",
        salary: {
          code: "99",
          name: "면접후 결정",
        },
        id: "41962655",
        "posting-timestamp": "1640762642",
        "modification-timestamp": "1643257842",
        "opening-timestamp": "1640962800",
        "expiration-timestamp": "1646060399",
        "close-type": {
          code: "1",
          name: "접수마감일",
        },
      },
    ],
  },
};
