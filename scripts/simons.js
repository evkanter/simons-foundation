
	$( document ).ready(function() {   });

	function viewRecord(UniqueID) {

		var searchDataAPI = "../api/v1/json/get_dob_data_row?";

		$.getJSON( searchDataAPI, {
			email: "evkanter@gmail.com",
			rest_api_key: "5F4289A2E84456AHJ5",
			limit: "1",
			uniquekey_1: UniqueID
		})

		.done(function( data ) {
			$.each( data.Results, function( i, item ) {

				var tabs = `<nav class="nav nav-tabs" id="Tabs` + item.UniqueID + `" role="tablist">
					<a class="nav-item nav-link active" id="nav-owner-tab-` + item.UniqueID + `" data-toggle="tab" href="#nav-owner-` + item.UniqueID + `" role="tab" aria-controls="nav-owner-` + item.UniqueID + `" aria-expanded="true">Owner</a>
					<a class="nav-item nav-link" id="nav-property-tab-` + item.UniqueID + `" data-toggle="tab" href="#nav-property-` + item.UniqueID + `" role="tab" aria-controls="nav-property-` + item.UniqueID + `">Property</a>
					<a class="nav-item nav-link" id="nav-job-tab-` + item.UniqueID + `" data-toggle="tab" href="#nav-job-` + item.UniqueID + `" role="tab" aria-controls="nav-job-` + item.UniqueID + `">Job Info</a>
				</nav>
				<div class="tab-content" id="nav-tabContent-` + item.UniqueID + `">
					<div class="tab-pane fade show active text-left" id="nav-owner-` + item.UniqueID + `" role="tabpanel" aria-labelledby="nav-owner-tab-` + item.UniqueID + `">
						<table class="table table-in-tab">
							<tr>
								<td>
									Applicants Name: ` + item.ApplicantsFirstName + ` ` + item.ApplicantsLastName + `<br/>
									Applicant Professional Title: ` + item.ApplicantProfessionalTitle + `<br/>
									Applicant License Number: ` + item.ApplicantLicenseNumber + `<br/>
									Owners Name: ` + item.OwnersFirstName + ` ` + item.OwnersLastName + `<br/>
									Owners Business Name: ` + item.OwnersBusinessName + `<br/>
									Owners Address House Number: ` + item.OwnersHouseNumber + ` ` + item.OwnersHouseStreetName + `<br/>
									Owners Phone Number: ` + item.OwnersPhoneNumber + `<br/>
								</td>
								<td>
									Owner Type: ` + item.OwnerType + `<br/>
									Street Name: ` + item.StreetName + `<br/>
									City: ` + item.City + `<br/>
									Borough: ` + item.Borough + `<br/>
									Block: ` + item.Block + `<br/>
									Lot: ` + item.Lot + `<br/>
								</td>
							</tr>
						</table>
					</div>
					<div class="tab-pane fade text-left" id="nav-property-` + item.UniqueID + `" role="tabpanel" aria-labelledby="nav-property-tab-` + item.UniqueID + `">
						<table class="table table-in-tab">
							<tr>
								<td>
									Adult Estab: ` + item.AdultEstab + `<br/>
									Bin Number: ` + item.BinNumber + `<br/>
									Boiler: ` + item.Boiler + `<br/>
									Building Type: ` + item.BuildingType + `<br/>
									City Owned: ` + item.CityOwned + `<br/>
									Cluster: ` + item.Cluster + `<br/>
									Community Board: ` + item.CommunityBoard + `<br/>
									Curb Cut: ` + item.CurbCut + `<br/>
									eFiling Filed: ` + item.eFilingFiled + `<br/>
									Enlargement SQ Footage: ` + item.EnlargementSQFootage + `<br/>
									Equipment: ` + item.Equipment + `<br/>
									Existing Dwelling Units: ` + item.ExistingDwellingUnits + `<br/>
									Existing Height: ` + item.ExistingHeight + `<br/>
								</td>
								<td>
									Existing No Of Stories: ` + item.ExistingNoOfStories + `<br/>
									Existing Occupancy: ` + item.ExistingOccupancy + `<br/>
									Existing Zoning Sqft: ` + item.ExistingZoningSqft + `<br/>
									Fire Alarm: ` + item.FireAlarm + `<br/>
									Fire Suppression: ` + item.FireSuppression + `<br/>
									Fuel Burning: ` + item.FuelBurning + `<br/>
									Fuel Storage: ` + item.FuelStorage + `<br/>
									Horizontal Enlrgmt: ` + item.HorizontalEnlrgmt + `<br/>
									InitialCost: ` + item.InitialCost + `<br/>
									Landmark: ` + item.Landmark + `<br/>
									LittleE: ` + item.LittleE + `<br/>
									LoftBoard: ` + item.LoftBoard + `<br/>
									Mechanical: ` + item.Mechanical + `<br/>
								</td>
								<td>
									Non Profit: ` + item.NonProfit + `<br/>
									Other: ` + item.Other + `<br/>
									Other Description: ` + item.OtherDescription + `<br/>
									PC Filed: ` + item.PCFiled + `<br/>
									Plumbing: ` + item.Plumbing + `<br/>
									Professional Cert: ` + item.ProfessionalCert + `<br/>
									Proposed Dwelling Units: ` + item.ProposedDwellingUnits + `<br/>
									Proposed Height: ` + item.ProposedHeight + `<br/>
									Proposed No Of Stories: ` + item.ProposedNoOfStories + `<br/>
									Proposed Occupancy: ` + item.ProposedOccupancy + `<br/>
									Proposed Zoning Sqft: ` + item.ProposedZoningSqft + `<br/>
									Special District 1: ` + item.SpecialDistrict1 + `<br/>
									Special District 2: ` + item.SpecialDistrict2 + `<br/>
								</td>
								<td>
									Site Fill: ` + item.SiteFill + `<br/>
									Sprinkler: ` + item.Sprinkler + `<br/>
									Standpipe: ` + item.Standpipe + `<br/>
									State: ` + item.State + `<br/>
									Street Frontage: ` + item.StreetFrontage + `<br/>
									Total Est Fee: ` + item.TotalEstFee + `<br/>
									Unique ID: ` + item.UniqueID + `<br/>
									Vertical Enlrgmt: ` + item.VerticalEnlrgmt + `<br/>
									Zip: ` + item.Zip + `<br/>
									Zoning Dist 1: ` + item.ZoningDist1 + `<br/>
									Zoning Dist 2: ` + item.ZoningDist2 + `<br/>
									Zoning Dist 3: ` + item.ZoningDist3 + `<br/>
								</td>
							</tr>
						</table>
					</div>
					<div class="tab-pane fade text-left" id="nav-job-` + item.UniqueID + `" role="tabpanel" aria-labelledby="nav-job-tab-` + item.UniqueID + `">
						<table class="table table-in-tab">
							<tr>
								<td>
									Approved: ` + item.Approved + `<br/>
									Fee Status: ` + item.FeeStatus + `<br/>
									Fully Paid: ` + item.FullyPaid + `<br/>
									Job Number: ` + item.JobNumber + `<br/>
									Job Status: ` + item.JobStatus + `<br/>
									Job Status Descrp: ` + item.JobStatusDescrp + `<br/>
									Job Type: ` + item.JobType + `<br/>
								</td>
							</tr>
						</table>
					</div>
				</div>`;

				var datarow = '<td colspan="5" class="text-center">' + tabs + '</td>';

				$('#rowB' + item.UniqueID).html(datarow);
				$('#rowB' + item.UniqueID).show();
				$('#more-' + item.UniqueID).hide();
			});
		});		


	}

	function getSearch() {

		var searchTerm = document.getElementById("tag").value;
		var searchDataAPI = "../api/v1/json/search_dob_data?";

		$.getJSON( searchDataAPI, {
			email: "evkanter@gmail.com",
			rest_api_key: "5F4289A2E84456AHJ5",
			limit: "100",
			tag: searchTerm
		})

		.done(function( data ) {
			$('#results tbody').html('');
			$.each( data.Results, function( i, item ) {
				var datarow = '<tr class="summary" id="rowA' + item.UniqueID + '">' +
								'<td class="text-center">' + item.OwnersFirstName + ' ' + item.OwnersLastName + '<br/>(' + item.OwnersBusinessName + ')</td>' +
								'<td class="text-center">' + item.JobNumber + '/' + item.DocNumber + '</td>' +
								'<td class="text-center">' + item.HouseNumber + ' ' + item.StreetName + '<br/>' + item.Borough + '</td>' +
								'<td class="text-center">' + item.LatestActionDate + '</td>' +
								'<td class="text-center"><button type="button" id="more-' + item.UniqueID + '" onClick="viewRecord(' + item.UniqueID + ');">More</button></td>' +
							'</tr>' +
							'<tr class="summarydetail" id="rowB' + item.UniqueID + '" style="display:none">' +
								'<td colspan="5">&nbsp;</td>' +
							'</tr>';
				$('#results tbody').append(datarow);
				$('#results').show();
			});
		});		
	}