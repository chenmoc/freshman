<?php
    $dbstring = "mysql:host=127.0.0.1;dbname=freshman";
    $username = "root";
    $passwd = "031010";
    $column_name = "freshman";

    $msg = array();
    $personal = array();
    /**
                    * 判断AJAX数据传输
     */
    if(!isset($_SERVER["HTTP_X_REQUESTED_WITH"]) || strtolower($_SERVER["HTTP_X_REQUESTED_WITH"])<>"xmlhttprequest"){
     @header("Location:/index.html");
 }

//Redis Server Connection Kit
//     try{
//         $redis = @new Redis();
//         $redis->connect("127.0.0.1",6379);
//     }catch (Exception $e){
//     }
@header("Content-Type: application/json;charset=utf-8"); //HTTP头用于jq返回
try{
    $data = new PDO($dbstring,$username,$passwd);
    $data->query("SET NAMES UTF8");
}
catch(PDOException $e){
    $msg["status"] = -1;
    $msg["msg"] = "数据库炸了";
    exit(json_encode($msg));
}
$name = htmlspecialchars(addcslashes($_POST['name'],"\0..\37"));
$stu_num = htmlspecialchars(addcslashes($_POST['stunum'],"\0..\37"));

$pmf = $data->prepare("SELECT * FROM ".$column_name." WHERE name = ? AND  stu_num = ?");
$pmf->bindParam(1,$name,PDO::PARAM_STR);
$pmf->bindParam(2,$stu_num,PDO::PARAM_INT);
if($pmf->execute()){
    $arr = $pmf->fetchAll(PDO::FETCH_ASSOC);
    if(count($arr)<>1){
        $msg["status"] = -2;
        $msg["msg"] = "找不到该同学，请检查输入的信息";
        exit(json_encode($msg));
    }
    else{
        $body = $arr[0];
        $province = mb_substr($body['location'], 0,20,"utf8");
        $className = $body["class_name"];
        $class_people = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."'");
        $class_people_man = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND sex = '男' ");
        $class_people_province = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%".$province."%' ");
        $class_same_dormitory = $data->query("SELECT name FROM ".$column_name." WHERE dormitory = '".$body['dormitory']."' AND dormitory1 = '".$body['dormitory1']."'");
        $class_same_class = $data->query("SELECT name FROM ".$column_name." WHERE class_name = '".$body['class_name']."'");
        $class_province_BJ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%北京%' ");
        $class_province_TJ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%天津%' ");
        $class_province_HB = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%河北%' ");
        $class_province_SX = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%山西%' ");
        $class_province_NM = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%内蒙古%' ");
        $class_province_LN = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%辽宁%' ");
        $class_province_JL = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%吉林%' ");
        $class_province_HLJ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%黑龙江%' ");
        $class_province_SH = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%上海%' ");
        $class_province_JS = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%江苏%' ");
        $class_province_ZJ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%浙江%' ");
        $class_province_AH = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%安徽%' ");
        $class_province_FJ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%福建%' ");
        $class_province_JX = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%江西%' ");
        $class_province_SD = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%山东%' ");
        $class_province_HN = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%河南%' ");
        $class_province_HB1 = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%湖北%' ");
        $class_province_HN1 = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%湖南%' ");
        $class_province_GD = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%广东%' ");
        $class_province_GX = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%广西%' ");
        $class_province_HN2 = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%海南%' ");
        $class_province_CQ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%重庆%' ");
        $class_province_SC = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%四川%' ");
        $class_province_GZ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%贵州%' ");
        $class_province_YN = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%云南%' ");
        $class_province_XZ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%西藏%' ");
        $class_province_SX1 = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%陕西%' ");
        $class_province_GS = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%甘肃%' ");
        $class_province_QH = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%青海%' ");
        $class_province_NX = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%宁夏%' ");
        $class_province_XJ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%新疆%' ");
        $class_province_XG = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%香港%' ");
        $class_province_AM = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%澳门%' ");
        $class_province_TW = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%台湾%' ");
        $class_city_JN = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%济南%' ");
        $class_city_DZ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%德州%' ");
        $class_city_LC = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%聊城%' ");
        $class_city_LW = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%莱芜%' ");
        $class_city_WF = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%潍坊%' ");
        $class_city_HZ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%菏泽%' ");
        $class_city_QD = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%青岛%' ");
        $class_city_RZ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%日照%' ");
        $class_city_TA = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%泰安%' ");
        $class_city_JN1 = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%济宁%' ");
        $class_city_ZB = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%淄博%' ");
        $class_city_BZ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%滨州%' ");
        $class_city_DY = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%东营%' ");
        $class_city_LY = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%临沂%' ");
        $class_city_YT = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%烟台%' ");
        $class_city_ZZ = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%枣庄%' ");
        $class_city_WH = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND location LIKE '%威海%' ");
        $class_birth_2002 = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND birth LIKE '%2002%' ");
        $class_birth_2003 = $data->query("SELECT COUNT(*) as total FROM ".$column_name." WHERE class_name = '".$className."' AND birth LIKE '%2003%' ");

        /**
                                 * 理应添加缓存
         *
         */
        $personal['roommate'] = $class_same_dormitory->fetchALL(PDO::FETCH_COLUMN,0);
        $personal['classmate'] = $class_same_class->fetchALL(PDO::FETCH_COLUMN,0);
        $personal['allin'] = (int)$class_people->fetchColumn(0);
        $personal['male'] = (int) $class_people_man->fetchColumn(0);
        $personal['female'] = $personal['allin'] - $personal['male'];
        $personal['same_province'] = (int)$class_people_province->fetchColumn(0);
        $personal['BJ'] = (int) $class_province_BJ->fetchColumn(0);
        $personal['TJ'] = (int) $class_province_TJ->fetchColumn(0);
        $personal['HB'] = (int) $class_province_HB->fetchColumn(0);
        $personal['SX'] = (int) $class_province_SX->fetchColumn(0);
        $personal['NM'] = (int) $class_province_NM->fetchColumn(0);
        $personal['LN'] = (int) $class_province_LN->fetchColumn(0);
        $personal['JL'] = (int) $class_province_JL->fetchColumn(0);
        $personal['HLJ'] = (int) $class_province_HLJ->fetchColumn(0);
        $personal['SH'] = (int) $class_province_SH->fetchColumn(0);
        $personal['JS'] = (int) $class_province_JS->fetchColumn(0);
        $personal['ZJ'] = (int) $class_province_ZJ->fetchColumn(0);
        $personal['AH'] = (int) $class_province_AH->fetchColumn(0);
        $personal['FJ'] = (int) $class_province_FJ->fetchColumn(0);
        $personal['JX'] = (int) $class_province_JX->fetchColumn(0);
        $personal['SD'] = (int) $class_province_SD->fetchColumn(0);
        $personal['HN'] = (int) $class_province_HN->fetchColumn(0);
        $personal['HB1'] = (int) $class_province_HB1->fetchColumn(0);
        $personal['HN1'] = (int) $class_province_HN1->fetchColumn(0);
        $personal['GD'] = (int) $class_province_GD->fetchColumn(0);
        $personal['GX'] = (int) $class_province_GX->fetchColumn(0);
        $personal['HN2'] = (int) $class_province_HN2->fetchColumn(0);
        $personal['CQ'] = (int) $class_province_CQ->fetchColumn(0);
        $personal['SC'] = (int) $class_province_SC->fetchColumn(0);
        $personal['GZ'] = (int) $class_province_GZ->fetchColumn(0);
        $personal['YN'] = (int) $class_province_YN->fetchColumn(0);
        $personal['XZ'] = (int) $class_province_XZ->fetchColumn(0);
        $personal['SX1'] = (int) $class_province_SX1->fetchColumn(0);
        $personal['GS'] = (int) $class_province_GS->fetchColumn(0);
        $personal['QH'] = (int) $class_province_QH->fetchColumn(0);
        $personal['NX'] = (int) $class_province_NX->fetchColumn(0);
        $personal['XJ'] = (int) $class_province_XJ->fetchColumn(0);
        $personal['XG'] = (int) $class_province_XG->fetchColumn(0);
        $personal['AM'] = (int) $class_province_AM->fetchColumn(0);
        $personal['TW'] = (int) $class_province_TW->fetchColumn(0);
        $personal['CJN'] = (int) $class_city_JN->fetchColumn(0);
        $personal['CDZ'] = (int) $class_city_DZ->fetchColumn(0);
        $personal['CLC'] = (int) $class_city_LC->fetchColumn(0);
        $personal['CLW'] = (int) $class_city_LW->fetchColumn(0);
        $personal['CWF'] = (int) $class_city_WF->fetchColumn(0);
        $personal['CHZ'] = (int) $class_city_HZ->fetchColumn(0);
        $personal['CQD'] = (int) $class_city_QD->fetchColumn(0);
        $personal['CRZ'] = (int) $class_city_RZ->fetchColumn(0);
        $personal['CTA'] = (int) $class_city_TA->fetchColumn(0);
        $personal['CJN1'] = (int) $class_city_JN1->fetchColumn(0);
        $personal['CZB'] = (int) $class_city_ZB->fetchColumn(0);
        $personal['CBZ'] = (int) $class_city_BZ->fetchColumn(0);
        $personal['CDY'] = (int) $class_city_DY->fetchColumn(0);
        $personal['CLY'] = (int) $class_city_LY->fetchColumn(0);
        $personal['CYT'] = (int) $class_city_YT->fetchColumn(0);
        $personal['CZZ'] = (int) $class_city_ZZ->fetchColumn(0);
        $personal['CWH'] = (int) $class_city_WH->fetchColumn(0);
        $personal['b2002'] = (int) $class_birth_2002->fetchColumn(0);
        $personal['b2003'] = (int) $class_birth_2003->fetchColumn(0);
        $personal['other'] =  $personal['allin']- $personal['b2002']- $personal['b2003'];
        $flag = 0;
        if(strpos($body["major"],'类') !== false){
            $flag= 1 ;
        }
        else if(strpos($body["major"],'能') !== false){
            $flag=1;
        }
        else{
            $flag = 2;
        }
        $personal['flag'] = $flag;
        $personal['className'] = $className;
        $personal['province'] = $province;
        $personal['bundle'] = $body;
        $personal['status'] = 1;
        $personal['msg'] = "已查找到";
        			sleep(1);//造成一种错觉
                    exit(json_encode($personal));
    }
}
else{
        $msg["status"] = -1;
        $msg["msg"] = '数据库累了，稍等一会';
        exit(json_encode($msg));
}
