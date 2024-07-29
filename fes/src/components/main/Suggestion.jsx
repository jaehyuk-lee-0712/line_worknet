//건의함

import React from "react";

const Suggestion = () => {
  return (
    <div id="suggestion_wrap">
      <div className="suggestion_head">
        <span>1대 1 건의/문의</span>
      </div>
      <div className="suggestion_title">
        <span>내 문의 현황</span>
        <span>*최근 5개의 문의만 표시됩니다.</span>
      </div>
      <table className="suggestion_list_wrap">
        <thead className="suggestion_list">
          <tr>
            <th className="num">번호</th>
            <th className="category">문의 신고 유형</th>
            <th className="title">제목</th>
            <th className="date">문의 날짜 </th>
            <th className="type">처리 현황</th>
          </tr>
        </thead>
        <thead className="suggestion_chart">
          <tr>
            <th className="num">1</th>
            <th className="category">1:1</th>
            <th className="title">
              서연언니가 지대 기여운 강아지를 키운다는게 사실인가욤?
            </th>
            <th className="date">24-07-26</th>
            <th className="type">미완료</th>
          </tr>
        </thead>
        <thead className="suggestion_chart">
          <tr>
            <th className="num">2</th>
            <th className="category">건의사항</th>
            <th className="title">
              세상에 비호감 딱 두명있대 두비두밥 어떻게 둘식이나? 두비두밥
            </th>
            <th className="date">24-07-24</th>
            <th className="type">완료</th>
          </tr>
        </thead>
        <thead className="suggestion_chart">
          <tr>
            <th className="num">3</th>
            <th className="category">홈페이지 관련</th>
            <th className="title">치이카와 기엽다</th>
            <th className="date">24-07-23</th>
            <th className="type">완료</th>
          </tr>
        </thead>
        <thead className="suggestion_chart">
          <tr>
            <th className="num">4</th>
            <th className="category">개인정보</th>
            <th className="title">내일의 도시락은 알배추찜~~</th>
            <th className="date">24-07-22</th>
            <th className="type">완료</th>
          </tr>
        </thead>
        <thead className="suggestion_chart">
          <tr>
            <th className="num">5</th>
            <th className="category">기타</th>
            <th className="title">지금은 오전12시 51분 임니다~~</th>
            <th className="date">24-07-21</th>
            <th className="type">완료</th>
          </tr>
        </thead>
      </table>
      <div className="suggestion_write">
        <span>글작성</span>
      </div>
    </div>
  );
};

export default Suggestion;
