import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { MdPhoneIphone } from "react-icons/md";
const PersonalRecord = () => {
  return (
    <div id="personal_wrap">
    <div className="personal_head">
      <span>신상기록부</span>
    </div>
    {/* 프로필 */}
    <div className="profile-wrap">
        <div className="profile-image"></div>
        <div className="profile-info">
            <h2>김춘식 <span>1996년 7월 21일</span></h2>
            <div className="resident-registrantion pm"><CgProfile /> <span>19960721-1******</span></div>
            <div className="contact pm"><IoMailOutline /> <span>skadbstj12@gmail.com</span> <div className='phone-num'><MdPhoneIphone /><span>010-4044-3502</span></div></div>
            <div className="address pm"><GoHomeFill /><span>제주특별자치시도 제주시 첨단로 242</span></div>
        </div>
    </div>
    {/* 사업장 */}
    <div className="element-wrap">
    <div className="element-title">
      <h2>사업장</h2> <div className="edit"><button className="edit-btn">+ 수정</button></div>
    </div>
    <div className="element-box">
    <input className='company' type="text" placeholder='회사를 입력해주세요'/>
    <input className='department' type="text" placeholder='분야를 선택해주세요'/><br/>
      <div className="element-input-box">
        <input className='workplace-input' type="text" placeholder='이름을 입력해주세요'/>
        <input className='workplace-input' type="text" placeholder='부서를 입력해주세요'/>
        <input className='workplace-input' type="text" placeholder='직급을 입력해주세요'/>
        <input className='workplace-input' type="text" placeholder='전화번호을 입력해주세요'/>
        <input className='workplace-input' type="text" placeholder='주소를 입력해주세요'/>
      </div>
    </div>
    </div>
    {/* 훈련 신청 */}
    <div className="element-wrap">
    <div className="element-title">
      <h2>훈련신청 사유</h2>
    </div>
    <div className="element-input-box">
      <input className='training' type="text" placeholder='훈련신청 사유를 적어주세요' />
    </div>
      </div>

    {/* 최종 학력 */}
      <div className="element-wrap">
    <div className="element-title">
      <h2>최종학력 </h2><div className="edit"><button className="edit-btn">+ 수정</button></div>
    </div>
    <div className="education-box">
        <input className='schoolname' type="text" placeholder='학교명을 입력해주세요' />
        <select name="상태" id="status">
        <option value="졸업">졸업</option>
        <option value="중퇴">중퇴</option>
        <option value="검정고시">검정고시</option>
        </select>
        <input className='date-attended' type="text" placeholder='날짜' />
      </div>
      <div className="department">
        <input className='department-input' type="text" placeholder='학과명' />
      </div>
    </div>

    {/* 면허 및 자격사항& 근무 경력 */}
    <div className="element-wrap2">
      <div className="license-wrap">
      <div id="license" className="element-title2">
            <h2>면허 및 자격사항 </h2><div className="add"><button className="add-btn">+ 추가</button></div>
          </div>

        <div className="lincense-box-wrap">
              <div className="license-box">
                <input className='license-input' type="text" placeholder='보유중인 자격증을 입력해주세요' />
                <input className='license-date' type="text" placeholder='취득 날짜' />
              </div>
              <div className="organization">
                <input className='organization-input' type="text" placeholder='기관명' />
              </div>
        </div>

        <div className="lincense-box-wrap">
              <div className="license-box">
                <input className='license-input' type="text" placeholder='보유중인 자격증을 입력해주세요' />
                <input className='license-date' type="text" placeholder='취득 날짜' />
              </div>
              <div className="organization">
                <input className='organization-input' type="text" placeholder='기관명' />
              </div>
        </div>

        <div className="lincense-box-wrap">
              <div className="license-box">
                <input className='license-input' type="text" placeholder='보유중인 자격증을 입력해주세요' />
                <input className='license-date' type="text" placeholder='취득 날짜' />
              </div>
              <div className="organization">
                <input className='organization-input' type="text" placeholder='기관명' />
              </div>
        </div>
      
      </div>
      <div className="career-wrap">
      <div id="career" className="element-title2">
        <h2>근무경력</h2><div className="add"><button className="add-btn">+ 추가</button></div>
      </div>
     <div className="career-box-wrap">
     <div className="career-box">
      <input className='career-input' type="text" placeholder='회사명을 입력해주세요' />
      <input className='career-date' type="text" placeholder='근무기간' />
      </div>
      <div className="department">
        <input className='department-input' type="text" placeholder='부서명' />
      </div>
     </div>
     
     <div className="career-box-wrap">
     <div className="career-box">
      <input className='career-input' type="text" placeholder='회사명을 입력해주세요' />
      <input className='career-date' type="text" placeholder='근무기간' />
      </div>
      <div className="department">
        <input className='department-input' type="text" placeholder='부서명' />
      </div>
     </div>
     <div className="career-box-wrap">
     <div className="career-box">
      <input className='career-input' type="text" placeholder='회사명을 입력해주세요' />
      <input className='career-date' type="text" placeholder='근무기간' />
      </div>
      <div className="department">
        <input className='department-input' type="text" placeholder='부서명' />
      </div>
     </div>
    </div>
      </div>

    {/* 기타사항 */}
      <div className="element-wrap">
    <div className="element-title">
      <h2>기타사항 </h2><div className="edit"><button className="edit-btn">+ 수정</button></div>
    </div>
    <div className="element-input-box">
      <input className='etc' type="text" placeholder='기타사항을 입력해주세요' />
    </div>
      </div>
    <div className="button-wrap">
      <button className="save-button">저장하기</button>
    </div>
    </div>
  )
}

export default PersonalRecord
