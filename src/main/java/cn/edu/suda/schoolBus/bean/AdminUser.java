package cn.edu.suda.schoolBus.bean;

import java.util.Date;

public class AdminUser {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_user.au_id
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    private Integer auId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_user.au_account
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    private String auAccount;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_user.au_passwd
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    private String auPasswd;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column admin_user.au_time
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    private Date auTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column admin_user.au_id
     *
     * @return the value of admin_user.au_id
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public Integer getAuId() {
        return auId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column admin_user.au_id
     *
     * @param auId the value for admin_user.au_id
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public void setAuId(Integer auId) {
        this.auId = auId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column admin_user.au_account
     *
     * @return the value of admin_user.au_account
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public String getAuAccount() {
        return auAccount;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column admin_user.au_account
     *
     * @param auAccount the value for admin_user.au_account
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public void setAuAccount(String auAccount) {
        this.auAccount = auAccount == null ? null : auAccount.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column admin_user.au_passwd
     *
     * @return the value of admin_user.au_passwd
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public String getAuPasswd() {
        return auPasswd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column admin_user.au_passwd
     *
     * @param auPasswd the value for admin_user.au_passwd
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public void setAuPasswd(String auPasswd) {
        this.auPasswd = auPasswd == null ? null : auPasswd.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column admin_user.au_time
     *
     * @return the value of admin_user.au_time
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public Date getAuTime() {
        return auTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column admin_user.au_time
     *
     * @param auTime the value for admin_user.au_time
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    public void setAuTime(Date auTime) {
        this.auTime = auTime;
    }
}