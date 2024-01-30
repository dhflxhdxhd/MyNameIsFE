package com.ssafy.myname.dto.request.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EmailCertificationRequestDto {

    @NotBlank
    private String userId;

    @Email
    @NotBlank
    private String email;
    //인증번호 입력
}
