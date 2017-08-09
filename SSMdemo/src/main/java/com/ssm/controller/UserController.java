package com.ssm.controller;
import com.ssm.model.Project;
import com.ssm.model.User;
import com.ssm.service.ProjectService;
import com.ssm.service.ReadRedisService;
import com.ssm.service.UserService;
import com.ssm.service.WriteRedisService;
import com.ssm.util.FeedbackMessage;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by 01210367 on 2017/7/19.
 */
@Controller
@RequestMapping("user")
public class UserController {

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "projectService")
    private ProjectService projectService;

    @Resource(name = "readRedisService")
    private ReadRedisService readRedisService;

    @Resource(name= "writeRedisService")
    private WriteRedisService writeRedisService;

    @RequestMapping("/login")
    public ModelAndView getUser(HttpServletRequest request,User user){
        String sessionId = (String) request.getAttribute("sessionId");
        User loginuser = userService.selectByUsername(user.getUsername());
        String md5password = DigestUtils.md5Hex(user.getPassword());
        if (loginuser!=null){
            if(loginuser.getPassword().equals(md5password)){
                writeRedisService.set(sessionId, DigestUtils.md5Hex(md5password));
                return FeedbackMessage.doJSONFeedbackResponse(true, "11111", "登陆成功",
                        new ModelMap());
            }else {
                return FeedbackMessage.doJSONFeedbackResponse(true, "77779", "密码错误",
                        new ModelMap());
            }
        }else{
            return FeedbackMessage.doJSONFeedbackResponse(true, "77779", "用户名不存在",
                    new ModelMap());
        }
    }


    @RequestMapping("/index")
    public String redis(Model model,HttpServletRequest request){
            List<Project> projects =projectService.getAllProject();
            model.addAttribute("projects",projects);
            return "/login/index";
    }


    @RequestMapping("/userlist/{page}/{pagesize}")
    public String userlist(Model model,HttpServletRequest request,@PathVariable Integer page,@PathVariable Integer pagesize){
            String sessionId = (String) request.getAttribute("sessionId");
            List<User> users =userService.selectAllUser(page,pagesize);
            model.addAttribute("users",users);
            int total = userService.selectusercount();
            int counts = total%pagesize==0?total/pagesize:total/pagesize+1;
            model.addAttribute("counts",counts);
            model.addAttribute("page",page);
            model.addAttribute("pagesize",pagesize);
//            if (page!=1&&page>=counts){
//                model.addAttribute("page1","/user/userlist/"+(page-1)+"/"+pagesize);
//            }
//            if (page!=1&&page<counts){
//                model.addAttribute("page1","/user/userlist/"+(page-1)+"/"+pagesize);
//                model.addAttribute("page2","/user/userlist/"+(page+1)+"/"+pagesize);
//            }
//            if (page==1&&page<counts){
//                model.addAttribute("page2","/user/userlist/"+(page+1)+"/"+pagesize);
//            }
              return "/login/userlist";
    }

    @RequestMapping("/projectlist/{page}/{pagesize}")
    public String projectlist(Model model,@PathVariable Integer page,@PathVariable Integer pagesize){
            List<Project> projects =projectService.getAllProject(page,pagesize);
            int total = projectService.selectcount();
            model.addAttribute("projects",projects);
            int counts = total%pagesize==0?total/pagesize:total/pagesize+1;
            model.addAttribute("counts",counts);
            model.addAttribute("page",page);
            model.addAttribute("pagesize",pagesize);
//            if (page!=1&&page>=counts){
//                model.addAttribute("page1","/user/projectlist/"+(page-1)+"/"+pagesize);
//            }
//            if (page!=1&&page<counts){
//                model.addAttribute("page1","/user/projectlist/"+(page-1)+"/"+pagesize);
//                model.addAttribute("page2","/user/projectlist/"+(page+1)+"/"+pagesize);
//            }
//            if (page==1&&page<counts){
//                model.addAttribute("page2","/user/projectlist/"+(page+1)+"/"+pagesize);
//            }
            return "/login/projectlist";
    }


    @RequestMapping("/addprojrct")
    public ModelAndView addProjrct(Project project){
        boolean state = projectService.insert(project);
        if (state){
            return FeedbackMessage.doJSONFeedbackResponse(true, "11111", "添加项目成功",
                    new ModelMap());
        }else {
            return FeedbackMessage.doJSONFeedbackResponse(true, "77779", "添加项目失败",
                    new ModelMap());
        }
    }


    @RequestMapping("/adduser")
    public ModelAndView addUser(User user){
        boolean state = userService.insertUser(user);
        if (state){
            return FeedbackMessage.doJSONFeedbackResponse(true, "11111", "添加用户成功",
                    new ModelMap());
        }else {
            return FeedbackMessage.doJSONFeedbackResponse(true, "77779", "添加用户失败",
                    new ModelMap());
        }

    }
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request){
        String sessionId = (String) request.getAttribute("sessionId");
        writeRedisService.del(sessionId);
        return "login/login";
    }


    @RequestMapping("/delproject")
    public ModelAndView delproject(String projectid){
        boolean state = projectService.delproject(projectid);
        if (state){
            return FeedbackMessage.doJSONFeedbackResponse(true, "11111", "成功",
                    new ModelMap());
        }else {
            return FeedbackMessage.doJSONFeedbackResponse(true, "77779", "失败",
                    new ModelMap());
        }

    }


    @RequestMapping("/deluser")
    public ModelAndView deluser(String userid){
        boolean state = userService.deluser(userid);
        if (state){
            return FeedbackMessage.doJSONFeedbackResponse(true, "11111", "成功",
                    new ModelMap());
        }else {
            return FeedbackMessage.doJSONFeedbackResponse(true, "77779", "失败",
                    new ModelMap());
        }

    }

    @RequestMapping("/selectuserbyusername")
    public ModelAndView selectuserbyid(String username){
        User user = userService.selectByUsername(username);
        ModelMap modelMap = new ModelMap();
        modelMap.addAttribute("user",user);
        if (user!=null){
            return FeedbackMessage.doJSONFeedbackResponse(true, "11111", "成功",
                    modelMap);
        }else {
            return FeedbackMessage.doJSONFeedbackResponse(true, "77779", "失败",
                    modelMap);
        }

    }

}
