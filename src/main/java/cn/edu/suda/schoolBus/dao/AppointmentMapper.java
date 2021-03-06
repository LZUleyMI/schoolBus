package cn.edu.suda.schoolBus.dao;

import cn.edu.suda.schoolBus.bean.Appointment;
import cn.edu.suda.schoolBus.bean.AppointmentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AppointmentMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int countByExample(AppointmentExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int deleteByExample(AppointmentExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int deleteByPrimaryKey(Integer aId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int insert(Appointment record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int insertSelective(Appointment record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    List<Appointment> selectByExample(AppointmentExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    Appointment selectByPrimaryKey(Integer aId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int updateByExampleSelective(@Param("record") Appointment record, @Param("example") AppointmentExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int updateByExample(@Param("record") Appointment record, @Param("example") AppointmentExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int updateByPrimaryKeySelective(Appointment record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table appointment
     *
     * @mbggenerated Sun Apr 10 16:10:16 CST 2016
     */
    int updateByPrimaryKey(Appointment record);
}