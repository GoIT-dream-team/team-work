"use strict";$(document).ready(function(){$(".bur-menu").click(function(){$(".bur-menu, .nav-menu").toggleClass("active"),$("body").toggleClass("lock"),$(".top-header").toggleClass("to-top")}),$(".bur-menu").on("click",function(){$(this).next(".nav-menu__list").slideToggle("fast",function(){$(this).prev().html($(this).is(":visible")?"Скрыть":"Меню")})}),$(".nav-menu__list a").click(function(o){$(".bur-menu").click()}),$(function(){$('a[href^="#"]').on("click",function(o){o.preventDefault();var e=$(this).attr("href"),s=$(e).offset().top;$("html, body").animate({scrollTop:s},1e3)})}),$(".top-slider").slick({arrows:!1,dots:!0,infinite:!0,speed:1e3,slidesToShow:1,adaptiveHeight:!0,appendDots:$(".top-slider-dots")}),$(".sec-5-slider").slick({dots:!0,infinite:!0,speed:1e3,slidesToShow:1,appendDots:$(".slider-controls"),appendArrows:$(".slider-controls")}),$(".scrollup").click(function(){$("html, body").animate({scrollTop:0},1e3)}),$(window).scroll(function(){200<$(this).scrollTop()?$(".scrollup").fadeIn():$(".scrollup").fadeOut(),450<$(window).scrollTop()?$(".top-header").addClass("scroll"):$(".top-header").removeClass("scroll")}),$(".contact-btn").click(function(){$("#popup").fadeIn().addClass("open"),$("body").addClass("lock-two")}),$(".close-btn").click(function(){$("#popup").fadeOut().removeClass("open"),$("body").removeClass("lock-two")})});