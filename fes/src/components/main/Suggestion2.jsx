// 문의 리스트에서 제목 클릭시 나의 문의현황을 볼 수 있는 곳

import React from "react";

const Suggestion2 = () => {
  return (
    <div id="suggestion2_wrap">
      <div className="suggestion_head">
        <span>1대 1 건의/문의</span>
      </div>
      <div className="suggestion2_title">
        <span>내 문의 현황</span>
        <span>*조회 결과 입니다.</span>
      </div>
      <table className="suggestion_question">
        <thead className="suggestion_answer">
          <tr>
            <th>문의 신고 유형</th>
            <td>건의 사항</td>
          </tr>
          <tr>
            <th>문의 날짜</th>
            <td>23-07-24</td>
          </tr>
          <tr>
            <th>처리 현황</th>
            <td>완료</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>지금 내 눈 앞에 있는 건 군옥수수맛 아몬드</td>
          </tr>
          <tr>
            <th>문의 내용</th>
            <td>
              <p>지금 내 눈 앞에 있는 건 군옥수수맛 아몬드</p>
              <p>그 뒤에 있는 건 마늘빵 아몬드</p>
              <p>지금은 오전1시 34분</p>
              <p>오늘의 도시락은 알배추오리훈제찜</p>
            </td>
          </tr>
          <tr>
            <th>답변 내용</th>
            <td>
              <p>안녕하세요</p>
              <p>알배추 오리 훈제찜 맛있겠따</p>
            </td>
          </tr>
        </thead>
      </table>
      <div className="list_button">
        <span>목록</span>
      </div>
    </div>
  );
};

export default Suggestion2;
