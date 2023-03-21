import { useRouter } from "next/router";
import * as S from "./LockWallet.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { isWalletLockedState, passwordState } from "@/shared/recoil";
import { useState } from "react";

const LockWallet = ({ isLocked }: { isLocked: boolean }) => {
  const [, setIsLocked] = useRecoilState<boolean>(isWalletLockedState);
  const originialPw = useRecoilValue<string>(passwordState);
  const [inputPw, setInputPw] = useState<string>("");
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleInputPw = (e: any) => {
    const value = e.target.value;
    setInputPw(value);
  };
  const handleUnlock = () => {
    if (inputPw === originialPw) {
      setIsLocked(false);
    } else {
    }
  };
  return (
    <>
      {isError ? <div>Wrong Password</div> : <div></div>}
      <div>Logo</div>
      <S.WelcomebackStyle>Welcome Back</S.WelcomebackStyle>
      <S.DescriptionStyle>Unlock your wallet to continue</S.DescriptionStyle>
      <S.WalletPwInputStyle
        placeholder="Password"
        type="password"
        value={inputPw}
        onChange={handleInputPw}
      />
      <S.RecoveryTextStyle onClick={() => router.push("/recovery")}>
        Forgot the Password?
      </S.RecoveryTextStyle>
      <S.UnlockButton onClick={handleUnlock}>Unlock</S.UnlockButton>
    </>
  );
};

export default LockWallet;
