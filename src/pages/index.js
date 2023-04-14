import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProtectedContent from '@/components/util/ProtectedContent'
import SignIn from '@/components/util/SignIn'
import PageLayout from '@/components/util/PageLayout'
import { getProviders } from 'next-auth/react'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ providers }) {
  return (
    <>
      <Head>
        <title>Automate your QA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProtectedContent
          debug
          alt = {
              <SignIn providers = {providers}/>
          }
        >
            
            <div className='page-container'>
            <div className='blur'>
              <div className='segment-container2'>
              <div className='hor-width-container'>
                <div className='info1'>
                  <h3>Automate Quality Assurance in Manufacturing with AYQA</h3>
                  <br/>
                  <p>AYQA streamlines quality assurance in manufacturing through its innovative use of Machine Learning technology. Our node modules capture images of products to be evaluated by a neural network model hosted on a server. Actionable results can be easily triggered. Try a demo today.</p>
                  <br/>
                  <button className='button1'>Request a Demo</button>
                </div>
                <div className='image'>
                  <img className='container-image' src='https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'></img>
                </div>
              </div>
              </div>
              </div>
              <div className='blur'>
              <div className='segment-container3'>
              <div className='large-box'>
              <div className='blur'>
              <div className='width-container'>
                <div className='info2'>
                  <h1>How AYQA Automates Quality Assurance</h1>
                  <br/>
                  <p>AYQA automates the otherwise time-consuming task of manual quality assurance by enabling product images to be evaluated by a trained neural network model. Modules attached to the assembly line capture images throughout the production process, streamlining the detection of errors.</p>
                </div>
                <div className='cards-box'>
                  <div className='cards'>
                    <img className='small-container-image' src='https://www.einfochips.com/blog/wp-content/uploads/2018/11/how-to-develop-machine-learning-applications-for-business-featured.jpg'></img>
                    <h3>Reduced Costs</h3>
                    <p>Automated detection can eliminate costly manual quality inspections and reduce mistakes from faulty inspections.</p>
                  </div>
                  <div className='cards'>
                    <img className='small-container-image' src='https://i.pinimg.com/736x/36/e8/64/36e864e03e946157684f85ac2b452b3e.jpg'></img>
                    <h3>Improved Accuracy</h3>
                    <p>Machine Learning models can identify defects with a higher degree of accuracy than human inspectors, reducing errors.</p>
                  </div>
                  <div className='cards'>
                    <img className='small-container-image' src='https://images.squarespace-cdn.com/content/v1/5feb53185d3dab691b47361b/1609930650139-9NRI63XUJ29Y7E9LEA9G/12eca-machine-learning.gif'></img>
                    <h3>Increased Productivity</h3>
                    <p>Continuous monitoring ensures errors are detected early, allowing for quicker remediation, and increased productivity down the line.</p>
                  </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                </div>
                <div className='blur'>
                <div className='segment-container2'>
                <div className='width-container'>
                <div className='info3'>
                  <h1>Node Modules in AYQA</h1>
                  <br/>
                  <p>The Node modules in AYQA are designed for easy integration with a company's existing manufacturing systems. The modules work in conjunction with a server and a trained Machine Learning model, ensuring quality assurance automation is streamlined for increased productivity.</p>
                </div>
                <div className='cards-box'>
                  <div className='cards2'>
                    <h4>Enabling Node Modules</h4>
                    <p>AYQA's Node Modules can be quickly and easily enabled on existing assembly lines. They capture images for real-time analysis, enabling faster quality inspection while eliminating human error.</p>
                  </div>
                  <div className='cards2'>
                    <h4>Compatible with Standard IT Architectures</h4>
                    <p>AYQA's Node Modules are compatible with most manufacturing IT infrastructures right out of the box, meaning there's little need for a costly overhaul of IT systems.</p>
                  </div>
                  <div className='cards2'>
                    <h4>Configurable to Specific Business Needs</h4>
                    <p>AYQA's Node Modules can be configured to match specific business needs, ensuring that they operate in a manner that is compatible with existing production systems ideal for business-specific manufacturing requirements.</p>
                  </div>
                 </div>
                </div>
                </div>
              <hr></hr>
                <div className='segment-container2'>
              <div className='width-container'>
                <div className='info3'>
                  <h1>Capturing Product Images with Node Modules</h1>
                  <br/>
                  <p>AYQA's device agnostic node modules allow images to be captured from any assembly line, capturing product images at any stage of production. The images are then used for analysis by the server-side Machine Learning model.</p>
                </div>
                <div className='cards-box2'>
                <img className='medium-container-image' src='https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'></img>
                <img className='medium-container-image' src='https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'></img>
                <img className='medium-container-image' src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80'></img>
                <img className='medium-container-image' src='https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80'></img>
                 </div>
                 </div>
                 </div>
                  <hr></hr>
                <div className='segment-container2'>
                <div className='width-container'>
                <div className='info3'>
                  <h1>Training Your Machine Learning Model</h1>
                  <br/>
                  <p>AYQA’s Machine Learning module enables the creation of customized neural network models. In doing so, inspection is made more efficient due to a better understanding of the possible defects that might arise during production.</p>
                </div>
                <div className='cards-box'>
                  <div className='cards3'>
                    <h4>Quick & Easy Model Creation</h4>
                    <p>Custom model creation is simplified through AYQA's library of Machine Learning models.</p>
                  </div>
                  <div className='cards3'>
                    <h4>Training Data Preparation</h4>
                    <p>A machine learning model is only as good as the data it's trained with. AYQA allows for the collection of high-quality, detailed datasets to assist with model training.</p>
                  </div>
                  <div className='cards3'>
                    <h4>Iterative Model Training</h4>
                    <p>The process of iterative model training continues throughout its usage to ensure maximum accuracy, with feedback from AYQA's intuitive reporting system guiding optimization.</p>
                  </div>
                 </div>
                 </div>
                 </div>
                <hr></hr>
                 <div className='segment-container2'>
                <div className='width-container'>
                <div className='info3'>
                  <h1>Server-Side Evaluation of Product Images</h1>
                  <br/>
                  <p>Server-side evaluation of product images ensures quick and accurate decision-making for product quality. The evaluation is initiated through the modules' integration with the Machine Learning model on the server.</p>
                </div>
                <div className='cards-box'>
                  <div className='cards2'>
                    <h4>Realtime Evaluation</h4>
                    <p>Images captured by the module are transmitted to the server for immediate assessment by the Machine Learning model, triggering the necessary measures in real-time.</p>
                  </div>
                  <div className='cards2'>
                    <h4>Intuitive Error Alert System</h4>
                    <p>The Machine Learning model of AYQA sends out alerts during its evaluation of product images, providing as much detail as possible about the error detected.</p>
                  </div>
                  <div className='cards2'>
                    <h4>Realtime Analysis Reporting</h4>
                    <p>Reports on the server-side evaluation of product images show a detailed analysis of every step of the production process, including a report of errors detected and their frequency.</p>
                  </div>
                 </div>
                 </div>
                 </div>
                 </div>

            </div>
        </ProtectedContent>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}