import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Caption from '../components/caption'
import Feature from '../components/feature'
import Check from '../components/check'
import Quote from '../components/quote'
import Footer from '../components/footer'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="landing-page-header">
        <div className="landing-page-heading">
          <Navbar></Navbar>
        </div>
        <div className="landing-page-hero">
          <img
            alt="image"
            src="/playground_assets/1-png-aef2a3%20%5B1%5D-700h.jpg"
            className="landing-page-image"
          />
          <div className="landing-page-content">
            <h1 className="landing-page-title">
              do not loose that surf session 
            </h1>
            <span className="landing-page-caption">
              <span>
                SurfSlot is your scheduling automation platform for eliminating
                the great days of surf that you loose by having conflicting
                meetings.
              </span>
              <br></br>
            </span>
            <div
              id="google-login"
              className="landing-page-android-btn google-login"
            >
              <Caption Caption="Sign in with Google"></Caption>
              <img
                alt="image"
                src="/playground_assets/google-logo-png-suite-everything-you-need-know-about-google-newest-0-200h.png"
                className="landing-page-image1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-video">
        <div className="landing-page-content1">
          <div className="landing-page-header1">
            <h2 className="landing-page-text02">
              Built specifically for people who have important meetings (with
              the ocean)
            </h2>
          </div>
          <div className="landing-page-video-container">
            <img
              alt="image"
              src="/playground_assets/screenshot%202023-03-10%20at%2022.22.20-500h.png"
              className="landing-page-image2"
            />
            <div className="landing-page-heading-container">
              <div className="landing-page-heading01">
                <span className="landing-page-text03">
                  Avoid having your team mates scheduling meetings when it is
                  good to surf. 
                </span>
                <span className="landing-page-text04">
                  Spreadsheets can wait, the tide not. 
                </span>
              </div>
              <div className="landing-page-explore">
                <span className="landing-page-text05">
                  Explore pricing plans -&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-stats">
        <div className="landing-page-stat">
          <span className="landing-page-caption1">200k</span>
          <span className="landing-page-description">
            waves that are not surfed because of conflicting meetings
          </span>
        </div>
        <div className="landing-page-stat1">
          <span className="landing-page-caption2">5 meetings</span>
          <span className="landing-page-description1">
            per week that can be done earlier or afterwards. Or even more
          </span>
        </div>
        <div className="landing-page-stat2">
          <span className="landing-page-caption3">10.000 +</span>
          <span className="landing-page-description2">
            Lorem ipsum dolor sit ametconsectetur adipiscingvgdgt
          </span>
        </div>
      </div>
      <div id="features" className="landing-page-features">
        <div className="landing-page-header2">
          <div className="landing-page-tag">
            <span className="landing-page-text06">Features</span>
          </div>
          <div className="landing-page-heading02">
            <h2 className="landing-page-text07">
              Everything you get with surfslot
            </h2>
            <span className="landing-page-text08">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
          </div>
        </div>
        <div className="landing-page-feature-list">
          <Feature></Feature>
          <Feature
            Title="Multiple Devices"
            Thumbnail="/playground_assets/vector6113-r6dl.svg"
          ></Feature>
          <Feature
            Title="Analytics"
            Thumbnail="/playground_assets/vector6113-6zj.svg"
          ></Feature>
          <Feature
            Title="Virtual Card"
            Thumbnail="/playground_assets/vector6113-lvvs.svg"
          ></Feature>
          <Feature
            Title="Safe Transactions"
            Thumbnail="/playground_assets/vector6114-cupp.svg"
          ></Feature>
          <Feature
            Title="Milestones"
            Thumbnail="/playground_assets/vector6114-6m1e.svg"
          ></Feature>
          <Feature
            Title="Trade"
            Thumbnail="/playground_assets/vector6114-yjl.svg"
          ></Feature>
          <Feature
            Title="Wallet"
            Thumbnail="/playground_assets/vector6113-lvvs.svg"
          ></Feature>
        </div>
      </div>
      <div id="pricing" className="landing-page-pricing">
        <div className="landing-page-content2">
          <div className="landing-page-header3">
            <div className="landing-page-tag1">
              <span className="landing-page-text09">Pricing plans</span>
            </div>
            <div className="landing-page-heading03">
              <h2 className="landing-page-text10">
                No setup cost or hidden fees.
              </h2>
            </div>
          </div>
          <div className="landing-page-pricing-plans">
            <div className="landing-page-plans">
              <div className="landing-page-plan">
                <div className="landing-page-top">
                  <div className="landing-page-heading04">
                    <span className="landing-page-text11">Standard</span>
                    <span className="landing-page-text12">
                      Standard plan for busy surfers
                    </span>
                  </div>
                  <div className="landing-page-cost">
                    <span className="landing-page-text13">Free</span>
                  </div>
                </div>
                <div className="landing-page-bottom">
                  <div className="landing-page-check-list">
                    <Check Feature="Sync with your Google Calendar"></Check>
                    <Check Feature="Choose your favourite spots"></Check>
                    <Check Feature="Configure your location"></Check>
                    <Check Feature="surfslots populated into your Google Calendar"></Check>
                  </div>
                  <div className="landing-page-button google-login">
                    <span className="landing-page-text14">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="landing-page-plan1">
                <div className="landing-page-top1">
                  <div className="landing-page-heading05">
                    <span className="landing-page-text15">Plus</span>
                    <span className="landing-page-text16">
                      Augmented plan for top performers
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="landing-page-cost1">
                    <span className="landing-page-text17">$2</span>
                    <span className="landing-page-text18">/month</span>
                  </div>
                </div>
                <div className="landing-page-bottom1">
                  <div className="landing-page-check-list1">
                    <Check></Check>
                    <Check Feature="Configure your surf conditions"></Check>
                    <Check Feature="Define your surf skills"></Check>
                    <Check Feature="Adjust your forecasts"></Check>
                    <Check Feature="Rename the events on your employee calendar"></Check>
                  </div>
                  <div className="landing-page-button1">
                    <span className="landing-page-text19">Get Standard</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="landing-page-expand">
              <div className="landing-page-overlay">
                <div className="landing-page-header4">
                  <div className="landing-page-heading06">
                    <span className="landing-page-text20">Expand</span>
                    <span className="landing-page-text21">
                      This is simple, no one needs to expand
                    </span>
                  </div>
                  <div className="landing-page-check-list2">
                    <div className="landing-page-check">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="landing-page-icon"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="landing-page-text22">bla bla bla</span>
                    </div>
                    <div className="landing-page-check1">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="landing-page-icon02"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="landing-page-text23">bla bla bla</span>
                    </div>
                    <div className="landing-page-check2">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="landing-page-icon04"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="landing-page-text24">bla bla bla</span>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:ruben.r.rodrigues11@gmail.com?subject=SurfSlot - Contact Form"
                  className="landing-page-link"
                >
                  <div className="landing-page-button2">
                    <span className="landing-page-text25">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="landing-page-plans1">
            <div className="landing-page-plan2">
              <div className="landing-page-top2">
                <div className="landing-page-heading07">
                  <span className="landing-page-text28">Standard</span>
                  <span className="landing-page-text29">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="landing-page-cost2">
                  <span className="landing-page-text30">Free</span>
                </div>
              </div>
              <div className="landing-page-bottom2">
                <div className="landing-page-check-list3">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="landing-page-button3">
                  <span className="landing-page-text31">Get Standard</span>
                </div>
              </div>
            </div>
            <div className="landing-page-plan3">
              <div className="landing-page-top3">
                <div className="landing-page-heading08">
                  <span className="landing-page-text32">Plus</span>
                  <span className="landing-page-text33">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="landing-page-cost3">
                  <span className="landing-page-text34">$8</span>
                  <span className="landing-page-text35">/month</span>
                </div>
              </div>
              <div className="landing-page-bottom3">
                <div className="landing-page-check-list4">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="landing-page-button4">
                  <span className="landing-page-text36">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="landing-page-plan4">
              <div className="landing-page-top4">
                <div className="landing-page-heading09">
                  <span className="landing-page-text37">Premium</span>
                  <span className="landing-page-text38">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="landing-page-cost4">
                  <span className="landing-page-text39">$16</span>
                  <span className="landing-page-text40">/month</span>
                </div>
              </div>
              <div className="landing-page-bottom4">
                <div className="landing-page-check-list5">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="landing-page-button5">
                  <span className="landing-page-text41">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="landing-page-expand1">
              <div className="landing-page-overlay1">
                <div className="landing-page-header5">
                  <div className="landing-page-heading10">
                    <span className="landing-page-text42">Expand</span>
                    <span className="landing-page-text43">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="landing-page-check-list6">
                    <div className="landing-page-check3">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="landing-page-icon06"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="landing-page-text44">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="landing-page-check4">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="landing-page-icon08"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="landing-page-text45">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="landing-page-check5">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="landing-page-icon10"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="landing-page-text46">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="landing-page-button6">
                  <span className="landing-page-text47">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-page-help">
          <span className="landing-page-text50">Need any help?</span>
          <div className="landing-page-explore1">
            <a
              href="mailto:ruben.r.rodrigues11@gmail.com?subject=SurfSlot - Contact Form"
              className="landing-page-link1"
            >
              Get in touch with us right away -&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="landing-page-testimonials">
        <div className="landing-page-content3">
          <div id="quotes" className="landing-page-quotes">
            <div className="quote active-quote">
              <Quote rootClassName="quote-root-class-name"></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Testing these templates is a pleasure."'
                Title="Developer @ Vista La Vista"
                Author="Author 2"
                rootClassName="quote-root-class-name"
              ></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Wow, awesome works!'
                Title="Designer @ OhBoy"
                rootClassName="quote-root-class-name"
              ></Quote>
            </div>
          </div>
          <div className="landing-page-buttons">
            <div id="quote-before" className="landing-page-left">
              <svg viewBox="0 0 1024 1024" className="landing-page-icon12">
                <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
              </svg>
            </div>
            <div id="quote-next" className="landing-page-right">
              <svg viewBox="0 0 1024 1024" className="landing-page-icon14">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={` <script>
    /* Quote Slider - Code Embed */

    let current = 1;

    const nextButton = document.querySelector("#quote-next");
    const previousButton = document.querySelector("#quote-before");
    const quotes = document.querySelectorAll(".quote");

    if (nextButton && previousButton && quotes) {
      nextButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == quotes.length ? (current = 1) : current++;
        quotes[current - 1].classList.add("active-quote");
      });

      previousButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == 1 ? (current = quotes.length) : current--;
        quotes[current - 1].classList.add("active-quote");
      });
    }
  </script>`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <div id="faq" className="landing-page-faq">
        <div className="landing-page-content4">
          <div className="landing-page-header6">
            <div className="landing-page-tag2">
              <span className="landing-page-text51">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="landing-page-heading11">
              <h2 className="landing-page-text54">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="landing-page-rows">
            <div className="landing-page-column">
              <div className="Question">
                <span className="landing-page-title1">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-page-description3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="Question">
                <span className="landing-page-title2">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-page-description4">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="landing-page-question2 Question">
                <span className="landing-page-title3">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-page-description5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
            </div>
            <div className="landing-page-column1">
              <div className="landing-page-question3 Question">
                <span className="landing-page-title4">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-page-description6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="landing-page-question4 Question">
                <span className="landing-page-title5">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-page-description7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="landing-page-question5 Question">
                <span className="landing-page-title6">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-page-description8">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-get-started">
        <div className="landing-page-content5">
          <div className="landing-page-heading12">
            <h2 className="landing-page-text61">
              Get started with surfslot now!
            </h2>
          </div>
          <div className="landing-page-hero-buttons"></div>
        </div>
        <div
          id="google-login"
          className="landing-page-android-btn1 google-login"
        >
          <Caption Caption="Sign in with Google"></Caption>
          <img
            alt="image"
            src="/playground_assets/google-logo-png-suite-everything-you-need-know-about-google-newest-0-200h.png"
            className="landing-page-image3"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
