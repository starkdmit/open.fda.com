---
path: "/update/openfda-provides-ready-access-to-recall-data"
date: 2014-08-08
title: "OpenFDA provides ready access to recall data"
authors:
  - "Taha Kass-Hout, MD, MS"
---
Every year, hundreds of human and animal foods, drugs, and medical devices are recalled from the market by manufacturers. These products may be labeled incorrectly or might pose health or safety issues. Most recalls are voluntary; in some cases they may be ordered by the U.S. Food and Drug Administration. Recalls are reported to the FDA, and compiled into its Recall Enterprise System, or RES. Every week, the FDA releases an enforcement report that catalogues these recalls. And now, for the first time, there is an Application Programming Interface (API) that offers developers and researchers direct access to all of the [drug,](http://open.fda.gov/drug/enforcement/) [device,](http://open.fda.gov/device/enforcement/) and [food enforcement reports,](http://open.fda.gov/food/enforcement/) dating back to 2004.

The recalls in this dataset provide an illuminating window into both the safety of individual products and the safety of the marketplace at large. Recent reports have included such recalls as certain food [products](http://www.accessdata.fda.gov/scripts/enforcement/enforce_rpt-Product-Tabs.cfm?action=select&recall_number=V-075-2014&w=06252014&lang=eng) (for not containing the vitamins listed on the label), [a soba noodle salad](http://www.accessdata.fda.gov/scripts/enforcement/enforce_rpt-Product-Tabs.cfm?action=select&recall_number=F-2033-2014&w=06252014&lang=eng) (for containing unlisted soy ingredients), and a pain reliever  (for not following laboratory testing requirements).

At present, FDA provides various ways to access the recalls data, including an [RSS feed,](http://www.fda.gov/AboutFDA/ContactFDA/StayInformed/RSSFeeds/Recalls/rss.xml) a <a class="link-external" href="https://www.flickr.com/photos/fdaphotos/sets/72157639317944704/">Flickr stream</a> and a [search interface.](http://www.fda.gov/Safety/Recalls/default.htm) This new API supplements these sources as the first, and one-call, access to the entire enforcements archive. The hope is that this API will be useful to developers and researchers interested in FDA enforcement actions. Developers can now call into the API to add recalls data to mobile apps or consumer websites. And researchers could use the API to study individual manufacturers, product categories, or specific foods or drugs.

The recalls database is the second dataset to be released on openFDA. Since openFDA debuted on June 2, 2014, the website has generated considerable interest. In the past five weeks, the site has had 34,000 sessions (two-thirds are new sessions) from 26,000 unique visitors worldwide that generated 80,000 page views.

The [adverse events API](http://open.fda.gov/drug/event/) has been accessed by 18,000 Internet connected devices, with nearly 2.4 million API calls since the launch.  At least one new website, <a class="link-external" href="http://www.researchae.com">http://www.researchae.com</a> has been created to allow any user to submit queries on the adverse events data, and several other companies are integrating the data into their products and services. It is also being accessed by researchers inside and outside FDA and by <a class="link-external" href="http://www.fiercepharma.com/story/biogen-ms-blockbuster-tecfidera-earns-high-marks-safety/2014-06-26">journalists</a> as well.

More APIs will follow in the weeks ahead. OpenFDA is taking an agile (development in small chunks of iterations) approach in the creation and release of these APIs, with the objective of getting feedback from developers and researchers (as well as from industry and the public) at the <a class="link-external" href="http://github.com/FDA/openfda">GitHub</a> and <a class="link-external" href="https://opendata.stackexchange.com/questions/tagged/openfda">StackExchange</a> forums that serve our project. We plan to incorporate some of the feedback into future iterations of the API. Accordingly, as we learn more about how the public might seek to use this data—and as a result of our agile and user-centered methodologies—the API structure may change in quite a bit in the coming months. It’s also important to note that this API, like all others on openFDA, are in beta and are not ready for clinical use. However, their contribution to FDA’s public health mission already now grows every day.

(Cross-posted from the FDA blog, where this was originally published on July 16, 2014.)