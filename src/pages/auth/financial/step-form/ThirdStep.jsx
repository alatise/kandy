/* eslint-disable jsx-a11y/anchor-is-valid */

import { CloudDownload } from "../../../../assets/signup";
import UploadField from "../../../../components/common/UploadField";
import React, { useState } from "react";
import { Modal } from "antd";
import { Kanda } from "../../../../assets/common";
import SignatureCanvas from 'react-signature-canvas'
const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
const ThirdStep = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div className="mt-4">
      <h1>Sign Kanda Contract</h1>
      <p className="text-sm text-fadedBlue ">
        Sign contract and pay fees to use Kanda
      </p>

      <div className="mt-11 max-w-[454px] space-y-6">
        <div className="text-kandaBlack">
          Sign Kanda contract
          <div className="border-b border-b-[#DADADA] "></div>
        </div>

        <div className="text-contentFade">
          You can{" "}
          <a
            className="text-kandaBlue font-bold underline underline-offset-4 text-bold"
            href="#"
          >
            click here
          </a>{" "}
          to sign contract online or
        </div>

        <div className="flex items-center">
          <div className="flex-1 border-b border-[#DADADA]">&nbsp;</div>
          <div className="mt-5 mx-4 text-contentFade">or</div>
          <div className="flex-1 border-b border-[#DADADA]">&nbsp;</div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="text-contentFade mb-3">
            Download Kanda’s contract and sign offline to re-upload below
          </div>
          <button
            onClick={() => setModal2Open(true)}
            className="text-kandaBlue text-center bg-[#E8F1FF] font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2"
          >
            Kanda_contract.pdf <img src={CloudDownload} alt="download" />
          </button>
        </div>

        <Modal
          open={modal2Open}
          footer={[
            <button
              onClick={() => setModal2Open(false)}
              className="flex text-white bg-kandaBlue font-bold py-4 rounded-2xl w-[50%] ml-[110px] justify-center items-center gap-2"
            >
              Save Document
            </button>,
          ]}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <div className="flex flex-col">
            <h2 className="text-[#1C1E19] text-2xl font-bold">
              Sign Kanda contract
            </h2>
            <p className="text-contentFade mt-1 ">
              Read information below and sign contract
            </p>
            <div className="flex-1 border-b border-[#DADADA]"></div>
          </div>
          <p className="mt-5 text-[#000000] font-light text-[14px] mb-2">
            This contract is made on 23rd Sep between Kanda, whose address is 8,
            Bendel Street Victoria Island, Lagos and Cross Investments whose
            address is 22 Victoria Island, Lagos.
          </p>

          <div className="text-[#000000] font-light text-[14px]">
            <div>
              <p className="mb-1">1. Scope of Work</p>
              <p>
                [Kanda] agrees to provide the following services to [Cross
                Investments]:
              </p>
              <ol>
                <li>[List of services]</li>
              </ol>
            </div>
            <div>
              <p className="mb-1">2.Timeline</p>
              <p>The services will be provided within [timeline].</p>
            </div>
            <div>
              <p className="mb-1">3. Payment</p>
              <p>
                [Cross Investments] will pay [Kanda] [amount] for the services.
                Payment will be made in full within [timeline] of completion of
                the services.
              </p>
            </div>

            <div>
              <p className="mb-1">4. Confidentiality</p>
              <p>
                [Kanda] agrees to keep all information provided by [Cross
                Investments] confidential.
              </p>
            </div>

            <div>
              <p className="mb-1">5. Termination</p>
              <p>
                Either party may terminate this contract at any time for any
                reason. If [Kanda] terminates the contract, [Cross Investments]
                will be entitled to a refund of any payments made for services
                that have not yet been provided. If [Cross Investments]
                terminates the contract, [Kanda] will be entitled to payment for
                all services that have already been provided.
              </p>
            </div>

            <div>
              <p className="mb-1">6. Governing Law</p>
              <p>
                This contract will be governed by and construed in accordance
                with the laws of the State of [state].
              </p>
            </div>

            <div>
              <p className="mb-1">7. Entire Agreement</p>
              <p>
                This contract constitutes the entire agreement between the
                parties and supersedes all prior agreements, representations,
                and understandings between the parties, whether written or oral.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex-1 border-b border-[#DADADA] w-full mb-2 "></div>

            <div className="w-[540px] h-[139px] bg-[#F4F4F4] rounded-2xl">
              <div className="flex items-center px-5 mt-6">
                <div className="flex-row">
                    <div className="flex-1 border-b border-[#000]">
                      <p className="text-[#000] font-bold">Kanda</p>&nbsp;
                      <img src={Kanda} className="w-[57px] h-[43px]" alt="" />
                    </div>
                        <p className="text-[12px] text-right text-contentFade w-[200px]">{new Date().toLocaleString(undefined, options) + ""}</p>
                </div>

                <div className="mt-5 mx-4 text-contentFade">{"      "}</div>

                <div className="flex-row">
                    <div className="flex-1 border-b border-[#000]">
                      <p className="text-[#000] font-bold">Cross Investments</p>&nbsp;
                        <SignatureCanvas penColor='black'
                          canvasProps={{width: 200, height: 42, className: 'sigCanvas'}} />
                    </div>
                        <p className="text-[12px] text-right text-contentFade w-[200px]">{new Date().toLocaleString(undefined, options) + ""}</p>
                </div>  
              </div>
            </div>
          </div>
        </Modal>

        <div className="flex-row">
          <UploadField
            label={"Upload signed contract"}
            fieldName={"Upload signed contract"}
          />
          <p className="text-[12px] text-right text-contentFade">
            Max size: 4MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
