package com.ssm.util;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJacksonJsonView;
import java.io.Serializable;

public class FeedbackMessage implements Serializable {

	private static final long serialVersionUID = 5418349452788839425L;


	//错误标志
	private boolean feedbackFlag;
	private String feedbackCode;
	private String feedbackMessage;


	public FeedbackMessage(boolean feedbackFlag, String feedbackCode, String feedbackMessage) {
		this.feedbackFlag = feedbackFlag;
		this.feedbackCode = feedbackCode;
		this.feedbackMessage = feedbackMessage;
	}

	public boolean isFeedbackFlag() {
		return feedbackFlag;
	}

	public void setFeedbackFlag(boolean feedbackFlag) {
		this.feedbackFlag = feedbackFlag;
	}

	public String getFeedbackCode() {
		return feedbackCode;
	}

	public void setFeedbackCode(String feedbackCode) {
		this.feedbackCode = feedbackCode;
	}

	public String getFeedbackMessage() {
		return feedbackMessage;
	}

	public void setFeedbackMessage(String feedbackMessage) {
		this.feedbackMessage = feedbackMessage;
	}

	public static ModelAndView doJSONFeedbackResponse(boolean feedbackFlag, String feedbackCode,
			String feedbackMessage, ModelMap modelMap) {
		FeedbackMessage feedback = new FeedbackMessage(feedbackFlag, feedbackCode, feedbackMessage);
		modelMap.addAttribute("feedback", feedback);
		return new ModelAndView(new MappingJacksonJsonView(), modelMap);

	}











}
