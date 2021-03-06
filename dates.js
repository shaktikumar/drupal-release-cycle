function date(year, monthNumber, day) {
  // new Date() takes a monthIndex:
  //    Integer value representing the month,
  //    beginning with 0 for January to 11 for December.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

  // This is a wrapper so you don't need to always subtract one

  return new Date(year, monthNumber-1, day)
}

const release_1_0 = date(2001, 1, 15);
const release_2_0 = date(2001, 3, 15);
const release_3_0 = date(2001, 9, 15);
const release_4_0 = date(2002, 6, 15);
const release_5_0 = date(2007, 1, 15);
const release_6_0 = date(2008, 2, 13);
const release_7_0 = date(2011, 1, 5);
const release_7_41 = date(2015, 10, 21);

// Generally, 8.x is in security support until 8.x+2 is out:
// "Security fixes are provided until the following minor release, approximately
// six additional months (so each minor receives security coverage for one year
// in total and two minors receive security coverage at a time)."
const release_8_0 = date(2015, 11, 19);
const release_8_1 = date(2016, 4, 20);
const release_8_2 = date(2016, 10, 5);
const release_8_3 = date(2017, 4, 5);
const release_8_4 = date(2017, 10, 4);
const release_8_5 = date(2018, 3, 3);
const release_8_6 = date(2018, 9, 5);
const release_8_7 = date(2019, 5, 1);
const release_8_8 = date(2019, 12, 4);
const release_8_9 = date(2020, 6, 3);
const release_9_0 = date(2020, 6, 3);

const eol_6 = date(2016, 2, 24);
const eol_7 = date(2021, 11, 30);
const eol_8_8 = date(2020, 12, 2);
const eol_8 = date(2021, 11, 30); // [1]
const eol_9_0 = date(2021, 6, 30);
const eol_9 = date(2023, 12, 31); // [2]

// [1] D8 EOL no later than Nov 2021. Could be 8.9 or 8.10
// https://www.drupal.org/core/release-cycle-overview#drupal-8-eol

// [2] estimate
// https://www.drupal.org/blog/plan-for-drupal-9
