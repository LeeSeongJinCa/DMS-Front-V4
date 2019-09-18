import * as React from 'react';
import ModalCloseImg from '../../assets/icon/blue_close-mark.png';
import * as S from './style';

interface Props {
}

const Login: React.FC<Props> = () => {
  return(
    <>
      <S.ModalNameWrapper>
        <S.ModalName>로그인</S.ModalName>
        <S.ModalClosebtn 
          src={ModalCloseImg}/>
      </S.ModalNameWrapper>

      <S.ModalContentWrapper>
        <S.ModalInput 
          placeholder="아이디"/>
        <S.ModalInput
          placeholder="비밀번호" 
          type="password"/>
        <S.LoginBottom>
          
          <S.AutoLoginWrapper>
            <S.AutoLoginCheckbtn 
              type="checkbox"
            />
            <span>자동 로그인</span>
          </S.AutoLoginWrapper>
          <S.ForgetPWLink>비밀번호 찾기</S.ForgetPWLink>
        </S.LoginBottom>
      </S.ModalContentWrapper>
      
      <S.ModalBottomWrapper>
        <S.Button>로그인</S.Button>
          <S.SignInLinkWrapper>
            <span>아직 DMS 회원이 아니시라면?</span>
            <S.SignInLink>회원가입</S.SignInLink>
          </S.SignInLinkWrapper> 
        </S.ModalBottomWrapper>
    </>
  );
}

export default Login;
