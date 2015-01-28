package com.mgh.mt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/class4")
public class Class4Controller {

		@RequestMapping("/layout")
		public String getClass4LayoutPage() {
			return "class4/layout";
		}
}
