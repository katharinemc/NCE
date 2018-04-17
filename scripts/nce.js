'use strict';


// $('h3').on('click', '.js-navigator', function() {
//   console.log('listener fired');
//   let clickedElement = event.currentTarget;
//   let elementHandle = $(clickedElement).siblings('.js-divhandle');
//   let elementToChange = $(elementHandle).parent('div');

//   console.log(clickedElement, elementHandle);
//   let replacementText = switchText(elementHandle);

//   // console.log(elementHandle, elementToChange);

//   $(elementToChange).html(replacementText);
 
// });

$(".js-navigator").click(function(){
  let clickedElement = event.currentTarget;
  let elementToChange = $(clickedElement).siblings('.js-divhandle');

  let currentText = elementToChange.children('div');
  let replacementText = switchText(currentText);
  $(elementToChange).html(replacementText);
  // console.log(elementToChange, currentText);
});


$("dt").click (function () {
  let clickedElement = event.currentTarget;
  let associatedText = $(clickedElement).next('dd');

  associatedText.toggleClass('hidden');
console.log('im a faq!', associatedText);

});


function switchText (elementHandle) {
  if ($(elementHandle).hasClass('js-initial') === true) {
    
    return medialText();
  }

  if ($(elementHandle).hasClass('js-medial') === true) {
    console.log('if statement working');
    return finalText();
  }

  if ($(elementHandle).hasClass('js-final') === true) {
    console.log('if statement working');
    return initialText();
  }
}

function initialText ( ) {
  return `
  <div class="js-divhandle js-initial">
  <p>Dr. Maggie Newman received her undergraduate degree in English from Louisiana State University in Baton Rouge, La.; her Master of Arts degree in Speech Communication from Louisiana State University in Baton Rouge, La.; and her Doctorate of Communications from the University of Florida in Gainesville, Florida. She has held faculty appointments at Miami University of Ohio, College of Notre Dame, University of Maryland, and Bishop Dennis J. O'Connell High School.</p>
 <p>Dr. Newman's dissertation, entitled Competition Among Women, revealed that traditional women compete more with other traditional women while androgynous women cooperate with other androgynous women. "Family Weekly" published an article in 1978 relating to Dr. Newman's research because the findings related directly to the Glass Ceiling and other issues affecting the upward mobility of women.</p>
 <p>Dr. Newman's work career includes positions as Director of Graduate Financial Aid at Georgetown University, Congressional Liaison for the Commission on Security and Economic Assistance (Carlucci Commission), and Public Relations Consultant for Reagan Bush '84. She has developed training programs for Arlington County's Adult Education Program and for several private and federal sector training organizations. She has participated in several national training team negotiations with the International Association Of Chiefs Of Police and Johnson & Johnson Associates.</p>

</div>

	`;
}


function medialText ( ) {

  return `
  <div class="js-divhandle js-medial">
	<p>Dr. Newman has written and developed several communications and motivational workshops including the following programs: Improving Communications Skills; Team Building For Managers and Secretaries; Critical Thinking and Critical Reading; Techniques Of Supervision For Law Enforcement Agencies; Projecting Professionalism; Interviewing Techniques; Effective Briefing Techniques; Powerful Presentations; Intercultural Awareness; Diversity and Cultural Awareness Training; Negotiation Techniques; Problem Solving For Managers; Proofreading and Editing; Performance Management; Effective Writing For Professionals; Fundamentals Of Memo Writing and Grammar; Management 101; Train The Trainer; and Stress Management.</p> -->
 <p>Dr. Newman has trained managers to build teams and communicate more effectively with their employees. She encourages discussion, interactive communication strategies, role playing, and group presentations. Programs include personality, learning, listening, and communication styles; responsibilities of supervisors and managing change. Recently Dr. Newman has refined training seminars in Effective Informal and Formal Briefings Techniques, Report Writing, Customer Service, Pre-Retirement Planning and Ethics and Discretion For Law Enforcement.</p>
         
  <p>She has negotiated national and international contracts with the Department Of Defense Dependent Schools, Johnson & Johnson Associates, the International Association Of Chiefs Of Police and the U.S. Customs. Tailoring negotiations, conflict management, cultural awareness, team building and customer service training programs to the unique needs of her diverse clientele merited her the 1994 Top Woman Owned Business Enterprise by the Department of Transportation's Federal Transit Administration. In 1996, Dr. Newman provided customer service training for the Department Of Defense Dependent Schools (DODDS). She trained management in the United States, Rota, Spain, and Istanbul, Turkey.</p>
   </div>

              `;
             

}


function finalText ( ) {
  return `
<div class="js-divhandle js-final">
<p>For the United States Marine Corps Institute, she tailored a Customer Service training program designed to improve communication at all levels and better meet the needs of the fleet. Headquarters Marine Corps then contracted Dr. Newman to provide Transitional and Change Management training for the Manpower Division (400 people) who would be relocated from Arlington, Virginia to Quantico, Virginia.</p>
<p>Dr. Newman has also written and provided EEOC lawyers with a five day Train-The-Trainer Negotiations Skills course. The success of this program has allowed her to provide Negotiations Skills training for the United States Department Of Agriculture's Graduate School. She has worked with Dr. Alvin Officer and Ms. Norma Ford to market and tailor her Negotiations Skills seminar to meet the specific needs of the USDA Graduate School's clients. Her partnership with the Graduate School has enhanced her knowledge, skills and abilities both to train and create exciting negotiation, communication and management seminars.</p>
<p>Focusing on the 21st Century, Dr. Newman has written and presented Diversity programs for the U.S. Customs and the Civil Rights Division of the U.S.D.A. In 1996 and 1997, Dr. Newman was the keynote speaker for Women's History Month for both the Navy Recruiting Command and Fort Belvoir respectively. In July of 1999, she was selected to deliver an interactive presentation entitled, "Promoting Diversity In The Workplace" for the U.S. Department Of Agriculture's Farm Service Agency. She was also awarded the honor of Best Poets of 1994, 1995, 1996, 1997, 1998 and Best Poets of the Nineties. In addition, she is a member of <p>As a result of her outstanding writing and speaking skills, she has developed Effective Writing and Speaking seminars for the United States Senate Office Of Education and Training and the U.S. Department of Navy. Her innovative and interactive training programs create new opportunities for advancement and enhance communication.</p> 
</div>
 `;
}

