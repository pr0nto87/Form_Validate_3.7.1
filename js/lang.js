				  var x = document.getElementById("bg_b");
				  var x2 = document.getElementById("en_b");
        // Create a function to change
        // the hash value of the page
        function changeLanguage(lang) {
            location.hash = lang;
            location.reload();
        }



        // Check if a hash value exists in the URL
        if (window.location.hash) {

            // Set the content of the webpage
            // depending on the hash value
            if (window.location.hash == "#eng") {
					x.style.display = "block";
					x2.style.display = "none";
                web_title.textContent = language.eng.web_title;
				m_ext.textContent = language.eng.m_ext;
				m_rest.textContent = language.eng.m_rest;
				m_sett.textContent = language.eng.m_sett;
				m_sensor.textContent = language.eng.m_sensor;
				m_user.textContent = language.eng.m_user;
				m_network.textContent = language.eng.m_network;
				title.textContent = language.eng.title;
				n_info.textContent = language.eng.n_info;
				sys_info.textContent = language.eng.sys_info;
				c_panel.textContent = language.eng.c_panel;
				wifi_n.textContent = language.eng.wifi_n;
				wifi_s.textContent = language.eng.wifi_s;
				wifi_ip.textContent = language.eng.wifi_ip;
				localhost.textContent = language.eng.localhost;
				temp_info.textContent = language.eng.temp_info;
				hum_info.textContent = language.eng.hum_info;
				h_index_info.textContent = language.eng.h_index_info;
				soil_m.textContent = language.eng.soil_m;
				water_c.textContent = language.eng.water_c;
				gen_valve.textContent = language.eng.gen_valve;
				valve_1.textContent = language.eng.valve_1;
				valve_2.textContent = language.eng.valve_2;
				valve_3.textContent = language.eng.valve_3;
				valve_4.textContent = language.eng.valve_4;
				valve_5.textContent = language.eng.valve_5;
				valve_6.textContent = language.eng.valve_6;
				
				
				footer.textContent = language.eng.footer;
            }
        }