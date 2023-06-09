package com.ssafy.d102.data.entity;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User extends BaseEntity{

    @Id
    @Column(name = "user_id", length = 50, nullable = false)
    private String userId;

    @Column(name = "user_pwd", length = 70, nullable = false)
    private String userPwd;

    @Column(name = "user_name", length = 50, nullable = false)
    private String userName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "organizationId", nullable = false)
    private Organization organization;

    @Column(name = "user_gender")
    private Integer userGender;

    @Column(name = "user_age")
    private Integer userAge;

    @Column(name = "user_phone", length = 20)
    private String userPhone;

    @Column(name = "user_email", length = 100)
    private String userEmail;

    @Column(name = "user_birth", length = 10)
    private String userBirth;

    @Column(name = "user_nationality", length = 100)
    private String userNationality;

    @Column(name = "user_status", nullable = false)
    private Integer userStatus;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "imageId", unique = true)
    private Image Image;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    private Membership membership;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserAttendanceStart> userAttendanceStarts;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserAttendanceEnd> userAttendanceEnds;

    // getters and setters



    // TODO : 생각해 볼 것
    // setter를 쓰는거보단 method를 만들어서 해당 메소드에서만 변경이 이루어지는 것이 좋음
    //매개변수가 많으면 builder를 사용하는 것을 고려
}

