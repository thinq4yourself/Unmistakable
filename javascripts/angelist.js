var requirejs,require,define;
(function () {
    define(["jquery", "initializer", "global/tiptip", "lib/partials", "lib/keyword_input", "lib/transitional_autocomplete", "lib/social_networks"], function (t, e, n, i, r, o, a) {
        return {
            list: function (e) {
                var n, i = this;
                return n = function () {
                    var e;
                    return e = t(i).parent(".job-listing-list-container"), null != e.data("startup_id") ? (e.html(AL.centeredLoadingImage()), t.get("http://angelist.co/startups/" + e.data("startup_id") + "http://angelist.co/job_listings/list", function (t) {
                        return e.hide().html(t).slideDown("fast")
                    })) : void 0
                }, e(".listing-row").hover(function () {
                    return t(".controls", this).show()
                }, function () {
                    return t(".controls", this).hide()
                }), e(".delete-listing").click(function () {
                    return confirm("Are you sure you want to delete this listing?") && t.ajax({
                        url: t(this).attr("href"),
                        type: "DELETE",
                        success: function () {
                            return n()
                        }
                    }), !1
                }), t(this).data("add_job") && e(".add_job_button").click(), t(document).bind("close.facybox", function () {
                    return n()
                })
            },
            edit: function (e, i) {
                var r, o;
                return "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: employer: add job step 1"), o = function () {
                    return e("#edit-job-listing-submit").hide(), e(".add_job_loading").addClass("loading").show()
                }, r = function () {
                    return e("#edit-job-listing-submit").show(), e(".add_job_loading").hide()
                }, e("#edit-job-listing-form").submit(function () {
                    return o(), t(this).ajaxSubmit(function (n) {
                        return "success" === n.status ? t.get(n.details_url, function (e) {
                            return i.hide("drop", {
                                direction: "up"
                            }, function () {
                                return t("#facybox .content").html(e)
                            })
                        }) : (e(".errors").html(n.message), e(".errors").show(), r())
                    }), !1
                }), n.init()
            },
            details: function (e, i) {
                var r, o;
                return "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: employer: add job step 2"), o = function () {
                    return e("#details-form-submit").hide(), e(".add_job_loading").addClass("loading").show()
                }, r = function () {
                    return e("#details-form-submit").show(), e(".add_job_loading").hide()
                }, e("#details-form-submit").click(function () {
                    return o(), t.ajax({
                        url: e("#submit_path").val(),
                        type: "POST",
                        data: {
                            startup: {
                                office_address: e(".office_address").val(),
                                office_city: e(".office_city").val(),
                                office_zip: e(".office_zip").val(),
                                company_size: e(".company_size option:selected").val(),
                                share_traction_and_technology_with_candidates: e(".share_traction_and_technology_with_candidates").prop("checked")
                            },
                            job_listing: {
                                id: e("#job_listing_id").val(),
                                startup_id: e("#startup_id").val(),
                                remote: e("input[name=remote]:checked").val()
                            }
                        },
                        success: function (e) {
                            return "success" === e.status ? t.get(e.next_url, function (e) {
                                return i.hide("drop", {
                                    direction: "up"
                                }, function () {
                                    return t("#facybox .content").html(e)
                                })
                            }) : void 0
                        },
                        error: function () {
                            return r()
                        }
                    })
                }), n.init()
            },
            done: function (e, n) {
                return "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: employer: add job step 3"), e(".add-another-job").one("click", function () {
                    return t(this).hide(), e(".loading").show().css("display", "inline"), t.get(e(".urls").data("new_url"), function (e) {
                        return n.hide("drop", {
                            direction: "up"
                        }, function () {
                            return t("#facybox .content").html(e)
                        })
                    })
                }), e(".browse-candidates").click(function () {
                    return window.location.href = e(".urls").data("browse_url")
                })
            },
            apply_button: function (e) {
                var n, i, r;
                return n = 1 === t(this).data("allowed_to_mark_interest"), r = t(this).data("startup_id"), e("#interested_button", this).click(function () {
                    return t(this).hasClass("logged_out") ? window.location = "/jobs?tab=profile&startup_id=" + r : i(1), !1
                }), i = function (i) {
                    return n ? (t.ajax({
                        url: "http://angelist.co/job_pairings",
                        type: "POST",
                        data: {
                            job_pairing: {
                                startup_id: r,
                                user_interested: i
                            },
                            source: "apply_button"
                        }
                    }), e(".prompt > .buttons").hide("drop", {
                        direction: "right"
                    }, "fast", function () {
                        return e(".prompt > .success").show()
                    })) : (window.location = "/jobs?tab=profile&startup_id=" + r, void 0)
                }
            },
            browse_sidebar: function (e, n) {
                var i, r, o, a;
                return e(".tab").hover(function () {
                    return t(this).addClass("hover")
                }, function () {
                    return t(this).removeClass("hover")
                }), a = function (n, i, r) {
                    return null == r && (r = !1), (r ? true : !n.hasClass("active")) ? (t("#startups_content").empty(), t("#startups_content").html(AL.loadingImage("width: auto; margin: 0 auto; display: block; margin-top: 20px")), e(".tab").removeClass("active"), n.addClass("active"), i.tab = n.data("tab_name"), t.ajax({
                        url: "http://angelist.co/job_listings/browse/",
                        type: "GET",
                        data: i,
                        success: function (e) {
                            return e.redirect ? (window.location = e.url, void 0) : t("#startups_content").html(e)
                        }
                    }), document.title = n.data("title") + " - AngelList", location.hash = n.data("tab_name"), "undefined" != typeof mixpanel && null !== mixpanel ? mixpanel.track("talent: candidate: viewed " + n.data("tab_name") + " tab") : void 0) : void 0
                }, e(".tab").click(function () {
                    return a(t(this), {})
                }), n.on("switch_tab", function (t, n, i, r) {
                    return null == r && (r = !1), a(e(".tab[data-tab_name=" + n + "]"), i, r)
                }), n.on("update_startup_counts", function (t, n) {
                    return n.open_match_count > 0 ? e(".count.matched").html(n.open_match_count).show() : 0 === n.open_match_count && e(".count.matched").hide(), n.interested_count > 0 ? e(".count.interested").html(n.interested_count).show() : 0 === n.interested_count && e(".count.interested").hide(), n.network_count > 0 ? e(".count.network").html(n.network_count).show() : 0 === n.network_count && e(".count.network").hide(), n.saved_count > 0 ? e(".count.saved").html(n.saved_count).show() : 0 === n.saved_count && e(".count.saved").hide(), n.yes_count > 0 ? e(".count.yes").html(n.yes_count).show() : 0 === n.yes_count && e(".count.yes").hide(), n.no_count > 0 ? e(".count.no").html(n.no_count).show() : 0 === n.no_count ? e(".count.no").hide() : void 0
                }), r = "", i = function () {
                    return "#_=_" === location.hash && (location.hash = ""), r !== location.hash.substring(1) ? (location.hash.substring(1) && e(".tab[data-tab_name=" + location.hash.substring(1) + "]").click(), r = location.hash.substring(1)) : void 0
                }, "onhashchange" in window ? (window.onhashchange = i, i()) : (o = window.setInterval(i, 500), window.onunload = function () {
                    return window.clearInterval(o)
                })
            },
            browse_profile: function (e, n) {
                var i, r;
                return e('input[value="developer"], input[value="designer"]').each(function (t, n) {
                    return e(n).prop("checked") ? e(".talent_source").show() : void 0
                }), t('input[value="developer"], input[value="designer"]').click(function () {
                    return e(this).prop("checked") ? e(".talent_source").show() : void 0
                }), e(".toggle-interested-locations a").click(function () {
                    return e(".toggle-interested-locations").hide(), e(".locations_interested").removeClass("hidden")
                }), r = new a(1 === e(".info", e(".facebook-dl")).data("fb_connected")), e(".facebook-dl").one("click", function () {
                    return "undefined" != typeof mixpanel && null !== mixpanel && "0" === e("input[name=edit]", e("#talent-profile-form")).val() && mixpanel.track("talent: clicked download from facebook"), e(".dl-button", t(this)).hide(), e(".loading", t(this)).show(), r.isConnected("facebook") ? i() : r.connect("facebook")
                }), n.on("connect_social_network_end", function () {
                    return r.update()
                }), n.on("connected_networks_updated", function () {
                    return r.isConnected("facebook") ? i() : (e(".dl-button", e(".facebook-dl")).show(), e(".loading", e(".facebook-dl")).hide())
                }), i = function () {
                    return t.ajax({
                        url: "http://angelist.co/job_profiles/download_from_facebook",
                        type: "post",
                        success: function () {
                            return "undefined" != typeof mixpanel && null !== mixpanel && "0" === e("input[name=edit]", e("#talent-profile-form")).val() && mixpanel.track("talent: finished download from facebook"), t.event.trigger("switch_tab", ["profile", {
                                    hide_facebook_download: !0
                                }, !0
                            ])
                        }
                    })
                }, t("#profile_bio").each(textCounter), t("#profile_what_ive_built").each(textCounter), e("#talent-profile-form").keydown(function (t) {
                    return 13 === t.keyCode ? !1 : void 0
                }), e("#talent-profile-form").submit(function () {
                    var n = this;
                    return "undefined" != typeof mixpanel && null !== mixpanel && "0" === t("input[name=edit]", t(this)).val() && mixpanel.track("talent: candidate pressed continue"), t("button[type=submit]", t(this)).hide(), e(".form-loading").show(), t(this).ajaxSubmit(function (i) {
                        return i.success ? (e(".form_errors").hide(), t.event.trigger("switch_tab", ["find", {}]), "undefined" != typeof mixpanel && null !== mixpanel && i.new_candidate === !0 ? mixpanel.track("talent: candidate applied") : void 0) : (e(".form_errors").show().empty().append(i.errors), e(".form-loading").hide(), t("button[type=submit]", t(n)).show(), t("html, body").animate({
                            scrollTop: 0
                        }, "slow"))
                    }), !1
                }), e(".deactivate-link").click(function () {
                    return confirm("Are you sure you want to deactivate your talent profile?") ? window.location.href = "/talent/deactivate" : void 0
                }), "undefined" != typeof mixpanel && null !== mixpanel && "0" === e("input[name=edit]", e("#talent-profile-form")).val() && mixpanel.track("talent: candidate viewed application"), t(".notice.create_profile").slideUp()
            },
            browse_startups: function (n, o) {
                var s, l, u, c, d, p, h, f, _, m, g, v, w, y, b, k, x, C, $, j, T, q;
                for (t(window).unbind("scroll"), u = function () {
                    return t(window).scroll(function () {
                        return t(window).scrollTop() > t(document).height() - t(window).height() - 200 ? C() : void 0
                    })
                }, s = n("input[name='roles'], input[name=type], input[name=remote]"), l = n(".salary-slider, .equity-slider"), n("input[name=younger_than_toggle]").click(function () {
                    return n("input[name=younger_than_toggle]:checked").length > 0 ? n(".younger_than").removeAttr("disabled") : n(".younger_than").attr("disabled", "disabled")
                }), n(".filter-toggle").toggle(function () {
                    return n(".filters").slideDown(), n(".filter-toggle a").html("Change Filters &#x25B4;"), "undefined" != typeof mixpanel && null !== mixpanel ? mixpanel.track("talent: candidate: open filters panel") : void 0
                }, function () {
                    return n(".filters").slideUp(), n(".filter-toggle a").html("Change Filters &#x25BE;"), "undefined" != typeof mixpanel && null !== mixpanel ? mixpanel.track("talent: candidate: close filters panel") : void 0
                }), k = n(".startup-container").data("startup_ids"), u(), t(".filters input").click(function () {
                    return n(".apply-filters-button").addClass("blue"), !0
                }), h = new r("current_location", n(".location-input"), n(".location-view")), h.enableAutocomplete("LocationTag"), q = n(".default-filters").data("location_names"), j = 0, T = q.length; T > j; j++) p = q[j], h.addKeyword(p);
                return d = new r("included_keywords", n(".keyword-input"), n(".keyword-view")), n(".equity-slider").slider({
                    range: !0,
                    min: 0,
                    max: 2,
                    values: [0, 2],
                    step: .1,
                    create: function () {
                        return n(".equity-slider .ui-slider-handle").each(function (e) {
                            return t(this).addClass(0 === e ? "left" : "right")
                        })
                    },
                    slide: function (t, e) {
                        return n(".equity-slider-value").html(c(e.values[0], e.values[1]))
                    }
                }), n(".salary-slider").slider({
                    range: !0,
                    min: 0,
                    max: 200,
                    values: [0, 200],
                    create: function () {
                        return n(".salary-slider .ui-slider-handle").each(function (e) {
                            return t(this).addClass(0 === e ? "left" : "right")
                        })
                    },
                    slide: function (t, e) {
                        return n(".salary-slider-value").html(y(e.values[0], e.values[1]))
                    }
                }), c = function (t, e) {
                    return 2 === e && (e = "2+"), t + " &mdash; " + e + "%"
                }, y = function (t, e) {
                    return 200 === e ? e = "200k+" : e += "k", "$" + t + "k &mdash; $" + e
                }, x = function (t) {
                    var e;
                    return e = n("input[type=checkbox][value=" + t + "]").attr("id"), n("label[for=" + e + "]").html()
                }, w = function () {
                    var e, i, r, o, a, s, l, u;
                    for (e = [], l = h.keywords, r = 0, a = l.length; a > r; r++) i = l[r], e.push(i);
                    for (n("input[name='roles']:checked").each(function () {
                        return e.push(t(this).attr("value"))
                    }), n("input[name='type']:checked").each(function () {
                        return e.push(x(t(this).attr("value")))
                    }), u = d.keywords, o = 0, s = u.length; s > o; o++) i = u[o], e.push(i);
                    return (0 !== n(".salary-slider").slider("values")[0] || 200 !== n(".salary-slider").slider("values")[1]) && (console.log(n(".salary-slider").slider("values")), e.push(y(n(".salary-slider").slider("values")[0], n(".salary-slider").slider("values")[1]))), (0 !== n(".equity-slider").slider("values")[0] || 2 !== n(".equity-slider").slider("values")[1]) && e.push(c(n(".equity-slider").slider("values")[0], n(".equity-slider").slider("values")[1])), n("input[name=remote]:checked").length > 0 && e.push("Remote OK"), n("input[name=younger_than_toggle]:checked").length > 0 && e.push("Posted in the last " + n(".younger_than option:selected").val() + " days"), 0 === e.length && e.push("Showing all companies"), n(".current-filters").html(e.join(", "))
                }, w(), f = 1, $ = !1, C = function () {
                    var r;
                    if (!$) return $ = !0, r = (new Date).getTime(), n(".startup-container").attr("data-checksum", r),
                    function (r, o) {
                        var a, u, c, d;
                        return s.attr("disabled", "disabled"), l.slider("disable"), n(".loading").show(), d = 10 * (r - 1), u = d + 9, 0 === k.slice(d, +u + 1 || 9e9).length ? (1 === r ? (c = n(".none").clone(), n(".filter-toggle").click()) : c = n(".end").clone(), n(".startup-container").append(c.show()).show(), n(".loading").hide(), s.removeAttr("disabled"), l.slider("enable"), void 0) : (a = t("<div />"), t.get("/job_listings/browse_startups_table", {
                            startup_ids: k.slice(d, +u + 1 || 9e9)
                        }, function (t) {
                            return n(".startup-container[data-checksum=" + o + "]").show(), a.html(t).appendTo(".startup-container[data-checksum=" + o + "]"), e.reinit("job_listings", "browse_startups_table"), s.removeAttr("disabled"), l.slider("enable"), n(".loading").hide(), $ = !1, i["with"](n(i.selector("job_listings/browse_startups_table")), function (t) {
                                var e;
                                return e = n(".startup-container").data("tab"), 1 === r && "yes" !== e && "no" !== e && "saved" !== e ? t.expandStartupRow(k[0]) : void 0
                            })
                        }))
                    }(f, r), f++
                }, o.on("candidate_processed_startup", function () {
                    return 10 > t(".startup-row:visible").length ? C() : void 0
                }), o.on("expand_next_startup", function (e, r) {
                    var o;
                    return (o = k[k.indexOf(r) + 1]) ? (i["with"](n(i.selector("job_listings/browse_startups_table")), function (t) {
                        return t.expandStartupRow(o)
                    }), n(t(".startup-row[data-startup_id=" + r + "].first-child")).length ? (n(t(".startup-row[data-startup_id=" + r + "]")).removeClass("first-child"), n(t(".startup-row[data-startup_id=" + o + "]")).addClass("first-child")) : void 0) : void 0
                }), o.on("job_pairing_add_note", function (t, e) {
                    var i;
                    return i = n(".startup-row[data-startup_id=" + e.startup_id + "]"), n(".note-prompt", i).slideDown(300, function () {
                        return n(".user-note", i).focus()
                    })
                }), m = !1, v = null, g = function () {
                    var e, i, r, o, a, c;
                    return null !== v ? (m = !0, void 0) : (t(window).unbind("scroll"), s.attr("disabled", "disabled"), l.slider("disable"), n(".startup-container").empty().hide(), n(".loading").show(), "" !== n(".keyword-input").val() && d.addKeyword(n(".keyword-input").val()), a = [], c = [], n("input[name='roles']:checked").each(function () {
                        return a.push(t(this).attr("value"))
                    }), n("input[name='type']:checked").each(function () {
                        return c.push(t(this).attr("value"))
                    }), i = h.keywords, e = d.keywords, r = 2 === n(".equity-slider").slider("values")[1] ? 100 : n(".equity-slider").slider("values")[1], o = 200 === n(".salary-slider").slider("values")[1] ? 1e3 : n(".salary-slider").slider("values")[1], v = t.ajax({
                        url: "http://angelist.co/job_pairings/startup_ids/",
                        data: {
                            roles: a,
                            locations: i,
                            types: c,
                            keywords: e,
                            remote: n("input[name=remote]:checked").val(),
                            younger_than: n("input[name=younger_than_toggle]:checked").length > 0 ? n(".younger_than option:selected").val() : void 0,
                            equity: {
                                min: n(".equity-slider").slider("values")[0],
                                max: r
                            },
                            salary: {
                                min: n(".salary-slider").slider("values")[0],
                                max: o
                            }
                        },
                        success: function (t) {
                            return "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: candidate: filtered", {
                                roles: a,
                                locations: i,
                                keywords: e,
                                types: c
                            }), m ? (m = !1, v = null, g(), void 0) : (w(), k = t.ids, n(".startup-count, .now-showing .count").html(k.length + " companies"), 0 !== k.length && n(".filter-toggle").click(), f = 1, v = null, $ = !1, C(), u())
                        }
                    }))
                }, b = new a(!1), n(".connect-fb").live("click", function () {
                    return t(this).parents(".none").find(".loading").show(), t(this).hide(), 1 === t(this).data("connected") ? _() : b.connect("facebook")
                }), o.on("connect_social_network_end", function () {
                    return b.update()
                }), o.on("connected_networks_updated", function () {
                    return b.isConnected("facebook") ? _() : void 0
                }), _ = function () {
                    return t.ajax({
                        url: "http://angelist.co/job_profiles/synchronous_indexing",
                        type: "post",
                        success: function (e) {
                            return e.network_count > 0 ? (t.event.trigger("switch_tab", ["network", {}, !0]), t.event.trigger("update_startup_counts", {
                                network_count: e.network_count
                            })) : (alert("Bummer. We scanned your friends and found no companies."), t.event.trigger("switch_tab", ["find", {}, !0]))
                        },
                        error: function () {
                            return alert("Something went wrong. Let us know at talent@angel.co"), t.event.trigger("switch_tab", ["find", {}, !0])
                        }
                    })
                }, n(".apply-filters-button").click(function () {
                    return g()
                }), C(), n(".fancybox").fancybox()
            },
            browse_startups_table: function (e) {
                var n, i, r, o, a;
                return n = 1 === t(".page_data").data("allowed_to_mark_interest"), i = 1 === t(".page_data").data("allowed_to_save"), e(".profile_header_links a, .at_mention_link, .product a, .why_us a, .profile-link").click(function (t) {
                    return this.target = "_blank", t.stopPropagation()
                }), e(".startup-row").click(function () {
                    return e(this).hasClass(".expanded") && e(this).find(".yes_menu").is(":visible") ? !0 : (t(this).toggleClass("expanded"), t(".yes_menu").hide(), e(".details-" + t(this).data("startup_id")).slideToggle(200), e(".action-bar", t(this)).slideToggle(400), "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: candidate: expanded a startup", {
                        startup_id: t(this).data("startup_id")
                    }), !1)
                }), e(".user-note").click(function (t) {
                    return t.stopPropagation()
                }), e(".reply-button").click(function (e) {
                    var n;
                    return n = {
                        startup_id: t(this).parents(".startup-row").data("startup_id"),
                        user_id: void 0
                    }, t.event.trigger("job_pairing_add_note", n), t(this).remove(), e.stopPropagation()
                }), e(".interested_button, .interested-with-note-button").one("click", function (i) {
                    var r, a;
                    return a = t(this).parents(".startup-row").data("startup_id"), "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: candidate: interested button", {
                        startup_id: a
                    }), n ? (r = t(".startup-row[data-startup_id=" + a + "]"), r.slideUp(200), o(1, a, e(".user-note", r).val()), t.event.trigger("expand_next_startup", a), i.stopPropagation()) : (t.event.trigger("switch_tab", ["profile", {
                            startup_id: a
                        }
                    ]), void 0)
                }), e(".not_interested_button").one("click", function (e) {
                    var i;
                    return i = t(this).parents(".startup-row").data("startup_id"), "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: candidate: not interested button", {
                        startup_id: i
                    }), t(".startup-row[data-startup_id=" + i + "]").slideUp(200), t.event.trigger("expand_next_startup", i), n && o(0, i), e.stopPropagation()
                }), e(".save_button").click(function (e) {
                    var n;
                    return n = t(this).parents(".startup-row").data("startup_id"), "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: candidate: save button", {
                        startup_id: n
                    }), i ? (t(".startup-row[data-startup_id=" + n + "]").slideUp(200), t.event.trigger("expand_next_startup", n), a(n), e.stopPropagation()) : (window.location = "/jobs?tab=profile&startup_id=" + n, void 0)
                }), e(".header_links > .link > a, .at_mention_link, .achievements a, .profile-link").click(function (t) {
                    return this.target = "_blank", t.stopPropagation()
                }), e(".refer-friend").click(function (t) {
                    return "undefined" != typeof mixpanel && null !== mixpanel && mixpanel.track("talent: clicked refer a friend"), this.target = "_blank", t.stopPropagation()
                }), o = function (e, n, i) {
                    return "" === i && (i = void 0), t.ajax({
                        url: "http://angelist.co/job_pairings",
                        type: "POST",
                        data: {
                            job_pairing: {
                                startup_id: n,
                                user_interested: e,
                                user_note: i
                            }
                        },
                        success: function (e) {
                            return t.event.trigger("candidate_processed_startup"), t.event.trigger("update_startup_counts", e.counts), e.show_howitworks ? t(".how_it_works_link").trigger("click") : void 0
                        }
                    })
                }, a = function (e) {
                    return t.ajax({
                        url: "http://angelist.co//job_pairings/add_to_starred_list",
                        data: {
                            actor: "user",
                            startup_id: e
                        },
                        success: function (e) {
                            return t.event.trigger("candidate_processed_startup"), t.event.trigger("update_startup_counts", e.counts)
                        }
                    })
                }, r = function (t) {
                    return e(".startup-row.expanded[data-startup_id=" + t + "]").length > 0 ? void 0 : e(".startup-row[data-startup_id=" + t + "]").click()
                }, {
                    expandStartupRow: r
                }
            },
            browse_matches: function (n, i) {
                var r, o, a, s;
                return t(window).unbind("scroll"), r = n(".matches-container").data("jp_ids"), o = 1, s = !1, a = function () {
                    var i, a, l;
                    if (!s) return s = !0, n(".loading").show(), l = 10 * (o - 1), a = l + 9, 0 === r.slice(l, +a + 1 || 9e9).length ? (n(".loading").hide(), void 0) : (i = t("<div />"), t.get("/job_listings/browse_matches_table", {
                            jp_ids: r.slice(l, +a + 1 || 9e9)
                        }, function (t) {
                            return n(".matches-container").show(), i.html(t).appendTo(".matches-container"), n(".loading").hide(), s = !1, e.reinit("job_listings", "browse_matches_table")
                        }), o++)
                }, t(window).scroll(function () {
                    return t(window).scrollTop() > t(document).height() - t(window).height() - 200 ? a() : void 0
                }), i.on("job_pairing_feedback_sending", function (t, e) {
                    return n(".match-row[data-jp_id=" + e + "]").slideUp()
                }), i.on("job_pairing_feedback_sent", function () {
                    return 10 > t(".match-row:visible").length && a(), t.ajax({
                        url: "http://angelist.co/job_pairings/sidebar_counts",
                        type: "post",
                        data: {
                            actor: "user"
                        },
                        success: function (e) {
                            return t.event.trigger("update_startup_counts", e.counts)
                        }
                    })
                }), r.length > 0 ? a() : void 0
            },
            browse_matches_table: function () {
                return e.reinit("job_pairings", "feedback_dropdown")
            },
            candidate_feedback: function (e) {
                var n;
                return e(".new_job_question .input").click(function () {
                    var n;
                    return n = e(this).find('input[type="radio"]').attr("checked", "checked"), e(".errors").empty().show(), "yes" === t(n).val() && (e(".not_hired").hide(), e(".hired").show()), "no" === t(n).val() ? (e(".not_hired").show(), e(".hired").hide()) : void 0
                }), n = new o.TagAutocomplete({
                    el: e("input[name=other_hiring_company]"),
                    tag_type: "CompanyTag"
                }), n.on("select", function (t) {
                    return e("input[name=other_hiring_company]").attr("value", t.tag.display_name)
                }), e(".match").click(function () {
                    return e(this).find('input[type="radio"]').attr("checked", "checked"), e("input[name=other_hiring_company]").attr("value", "")
                }), e("input[name=other_hiring_company]").focus(function () {
                    return e(".matches").find("input[type='radio']").attr("checked", !1)
                }), e(".submit-feedback").click(function () {
                    var n = this;
                    return e(".loading").show(), t(this).hide(), t.ajax({
                        url: "http://angelist.co/job_profiles/process_feedback",
                        type: "post",
                        data: {
                            hired: e("input[name=new_job]:checked").val(),
                            startup_id: e("input[name=startup_id]:checked").val(),
                            other_startup: e("input[name=other_hiring_company]").val(),
                            not_looking_reason: e(".not-looking-reason").val(),
                            deactivate: e("input[name=deactivate]:checked").filter(":visible").val()
                        },
                        success: function (i) {
                            return "error" === i.status ? (e(".errors").show().html(i.errors), e(".loading").hide(), t(n).show(), void 0) : window.location.href = "/jobs"
                        }
                    })
                })
            },
            still_looking_feedback_prompt: function (e, n) {
                return e(".submit-feedback").click(function () {
                    return "" !== e(".still-looking-feedback").val() ? (e(".loading").show(), t(this).hide(), t.ajax({
                        url: "http://angelist.co/job_profiles/process_feedback",
                        type: "post",
                        data: {
                            hired: "still_looking",
                            feedback: e(".still-looking-feedback").val()
                        },
                        success: function () {
                            return n.hide("drop", {
                                direction: "right"
                            }, 500)
                        }
                    })) : void 0
                })
            }
        }
    })
}).call(this);
//@ sourceMappingURL=job_listings.js.map