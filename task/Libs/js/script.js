$(window).on('load', function () {
		if ($('#preloader').length) {
		$('#preloader').delay(1000).fadeOut('slow', function () {
		$(this).remove();
		});
		}
		});

		$('#btnSubmit').click(function() {
			console.log($('#title').val());
	
			$.ajax({
				url: "Libs/php/wikiSearch.php",
				type: 'POST',
				dataType: 'json',
				data: {
					q: $("#title").val(),
	
				},
				success: function(result) {
	
					console.log(JSON.stringify(result));
					
					if (result.status.name = "ok") {
						
						$('#txtAdminName2').html(result['data'][0]['adminName2']);
						$('#txtCountryCode').html(result['data'][0]['countryCode']);
						$('#txtPostalCode').html(result['data'][0]['postalCode']);
						$('txtPlaceName').html(result['data'][0]['placeName']);
					}
	
				},
	
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus, errorThrown);
					console.log(jqXHR);
				}
			}); 
		
		});
	
		$('#btnSubmit2').click(function() {
			console.log($('#language').val());
			console.log($('#country').val);
	
			$.ajax({
				url: "Libs/php/getInfo.php",
				type: 'POST',
				dataType: 'json',
				data: {
					lang: $('#language').val(),
					country: $('#country').val()
	
				},
				success: function(result) {
	
					console.log(JSON.stringify(result));

					if (result.status.name == "ok") {

						$('#txtContinent').html(result['data'][0]['continent']);
						$('#txtCapital').html(result['data'][0]['capital']);
						$('#txtLanguages').html(result['data'][0]['languages']);
						$('#txtPopulation').html(result['data'][0]['population']);
						$('#txtArea').html(result['data'][0]['areaInSqKm']);
	
					}
	
				},
	
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus, errorThrown);
					console.log(jqXHR);
				}
			}); 
		
		});

		$('#btnSubmit3').click(function() {
			console.log($('#postCode').val());
			console.log($('#inputCountry').val());
			
	
			$.ajax({
				url: "Libs/php/getPostCodes.php",
				type: 'POST',
				dataType: 'json',
				data: {
					postalCode: $('#postCode').val(),
					country: $('#inputCountry').val()
					
	
				},
				success: function(result) {
	
					console.log(JSON.stringify(result));
					
					if (result.status.name = "ok") {
						$('#txtCountryCode').html(result['data'][0]['countryCode']);
						$('#txtPostalCode').html(result['data'][0]['postalCode']);
						$('#txtAdminName1').html(result['data'][0]['adminName1']);
						$('#txtPlaceName').html(result['data'][0]['placeName']);
					}

	
				},
	
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus, errorThrown);
					console.log(jqXHR);
				}
			}); 
		
		});
