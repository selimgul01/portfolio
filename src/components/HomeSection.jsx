import React from "react";

const HomeSection = () => {
  return (
    <div className=" flex items-center justify-center w-full h-screen">
      <div className=" flex items-center  space-x-16">
        <div className="flex flex-col ">
          <div class="card ">
            <div class="loader space-x-3">
              <p className="text-[#5987c0] flex items-center justify-center text-3xl">
                I am a
              </p>
              <div class="words">
                <span class="word">Graphic Designer</span>
                <span class="word">Web Designer</span>
                <span class="word">UI - UX Designer</span>
                <span class="word">Brand Designer</span>
                <span class="word">Art Director</span>
              </div>
            </div>
          </div>
          <div className="text-slate-800  mt-10 text-lg  max-w-[700px]">
            ``` Ben <b className="text-[#79a84a] ">Sude Turan</b>, grafik
            tasarım alanında kendini sürekli geliştiren, üretmeyi ve görsel
            hikayeler anlatmayı seven bir tasarımcıyım. Şu anda Akdeniz
            Üniversitesi'nde Grafik Tasarım 4. sınıf öğrencisiyim ve özellikle
            afiş tasarımı, kitap kapağı, mizanpaj, arayüz (UI) tasarımı, logo ve
            kurumsal kimlik gibi birçok alanda aktif olarak çalışıyorum. Tasarım
            anlayışım; estetik ile işlevselliği bir araya getirerek hem dikkat
            çekici hem de amaca hizmet eden işler ortaya koymak üzerine kurulu.
            Renklerle oynamayı, tipografiyi güçlü bir araç olarak kullanmayı ve
            enerjik kompozisyonlar oluşturmayı seviyorum. ```
          </div>
          <div className=" mt-10">
            <h1 className="text-3xl">İlgilendiğim Teknolojiler</h1>
            <div className="flex items-center space-x-4 mt-5">
              <div className="w-20 h-20">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#1ABCFE"
                      d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z"
                    ></path>
                    <path
                      fill="#0ACF83"
                      d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z"
                    ></path>
                    <path
                      fill="#FF7262"
                      d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z"
                    ></path>
                    <path
                      fill="#F24E1E"
                      d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z"
                    ></path>
                    <path
                      fill="#A259FF"
                      d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="w-20 h-20">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
                      fill="#330000"
                    ></path>{" "}
                    <path
                      d="M15.5686 19.5963H11.2297L10.3469 22.409C10.3224 22.5135 10.2262 22.5875 10.1215 22.5823H7.92384C7.79851 22.5823 7.75469 22.5117 7.79236 22.3704L11.549 11.2738C11.5866 11.1582 11.6242 11.0266 11.6617 10.8789C11.7109 10.6218 11.736 10.3606 11.7369 10.0987C11.7261 10.0213 11.7941 9.95294 11.8683 9.96378H14.8549C14.9424 9.96378 14.9924 9.9959 15.0051 10.0601L19.269 22.3897C19.3065 22.5182 19.269 22.5824 19.1563 22.5823H16.7144C16.6288 22.5921 16.547 22.5334 16.5266 22.4475L15.5686 19.5963ZM11.9059 17.1689H14.8737C14.3861 15.5027 13.8358 13.8584 13.3898 12.1793C12.9086 13.8613 12.3836 15.5365 11.9059 17.1689Z"
                      fill="#FF9A00"
                    ></path>{" "}
                    <path
                      d="M21.8045 12.0058C21.6129 12.0137 21.4219 11.98 21.2438 11.907C21.0658 11.834 20.9048 11.7232 20.7714 11.582C20.6384 11.4346 20.535 11.2618 20.4673 11.0733C20.3996 10.8849 20.3689 10.6846 20.3769 10.4839C20.3701 10.2852 20.4042 10.0873 20.477 9.90305C20.5499 9.71881 20.6598 9.5524 20.7996 9.41468C20.938 9.27839 21.1014 9.17161 21.2804 9.10052C21.4593 9.02942 21.6502 8.99543 21.842 9.00049C22.2929 9.00049 22.6466 9.13856 22.9033 9.41468C23.0329 9.55818 23.1336 9.72648 23.1997 9.90995C23.2657 10.0934 23.2959 10.2885 23.2883 10.4839C23.2962 10.6853 23.2645 10.8864 23.1951 11.075C23.1258 11.2636 23.0201 11.436 22.8845 11.582C22.7428 11.7253 22.5736 11.8369 22.3878 11.9099C22.2019 11.9828 22.0033 12.0155 21.8045 12.0058ZM20.5084 22.3896V13.181C20.5084 13.0654 20.5583 13.0076 20.6587 13.0076H22.9691C23.0691 13.0076 23.1192 13.0654 23.1193 13.181V22.3896C23.1193 22.5182 23.0692 22.5824 22.9691 22.5823H20.6775C20.5648 22.5823 20.5084 22.5181 20.5084 22.3896Z"
                      fill="#FF9A00"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="w-20 h-20">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 52 52"
                  xml:space="preserve"
                >
                  {/* Bu g etiketleri genelde temizlenebilir, SVG editörlerinden kalmadır. */}
                  {/* <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> */}
                  {/* <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> */}
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      {/* style="fill:#393687;" yerine style={{ fill: "#393687" }} */}
                      <path
                        style={{ fill: "#393687" }}
                        d="M40.824,52H11.176C5.003,52,0,46.997,0,40.824V11.176C0,5.003,5.003,0,11.176,0h29.649 C46.997,0,52,5.003,52,11.176v29.649C52,46.997,46.997,52,40.824,52z"
                      ></path>
                      <g>
                        {/* style="fill:#89D3FF;" yerine style={{ fill: "#89D3FF" }} */}
                        <path
                          style={{ fill: "#89D3FF" }}
                          d="M12.16,39H9.28V11h9.64c2.613,0,4.553,0.813,5.82,2.44c1.266,1.626,1.9,3.76,1.9,6.399 c0,0.934-0.027,1.74-0.08,2.42c-0.054,0.681-0.22,1.534-0.5,2.561c-0.28,1.026-0.66,1.866-1.14,2.52 c-0.48,0.654-1.213,1.227-2.2,1.72c-0.987,0.494-2.16,0.74-3.52,0.74h-7.04V39z M12.16,27h6.68c0.96,0,1.773-0.187,2.44-0.56 c0.666-0.374,1.153-0.773,1.46-1.2c0.306-0.427,0.546-1.04,0.72-1.84c0.173-0.801,0.267-1.4,0.28-1.801 c0.013-0.399,0.02-0.973,0.02-1.72c0-4.053-1.694-6.08-5.08-6.08h-6.52V27z"
                        ></path>
                        <path
                          style={{ fill: "#89D3FF" }}
                          d="M29.48,33.92l2.8-0.12c0.106,0.987,0.6,1.754,1.48,2.3c0.88,0.547,1.893,0.82,3.04,0.82 s2.14-0.26,2.98-0.78c0.84-0.52,1.26-1.266,1.26-2.239s-0.36-1.747-1.08-2.32c-0.72-0.573-1.6-1.026-2.64-1.36 c-1.04-0.333-2.086-0.686-3.14-1.06c-1.054-0.373-1.98-0.96-2.78-1.76c-0.987-0.934-1.48-2.073-1.48-3.42s0.54-2.601,1.62-3.761 s2.833-1.739,5.26-1.739c0.854,0,1.653,0.1,2.4,0.3c0.746,0.2,1.28,0.394,1.6,0.58l0.48,0.279l-0.92,2.521 c-0.854-0.666-1.974-1-3.36-1c-1.387,0-2.42,0.26-3.1,0.78c-0.68,0.52-1.02,1.18-1.02,1.979c0,0.88,0.426,1.574,1.28,2.08 c0.853,0.507,1.813,0.934,2.88,1.28c1.066,0.347,2.126,0.733,3.18,1.16c1.053,0.427,1.946,1.094,2.68,2s1.1,2.106,1.1,3.6 c0,1.494-0.6,2.794-1.8,3.9C41,39.046,39.246,39.6,36.94,39.6c-2.307,0-4.114-0.547-5.42-1.64 C30.213,36.867,29.533,35.52,29.48,33.92z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-20 h-20">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink" // Düzeltildi: xmlns:xlink -> xmlnsXlink
                  viewBox="0 0 52 52"
                  xmlSpace="preserve" // Düzeltildi: xml:space -> xmlSpace
                  // fill="#000000" // Genellikle iç path'ler kendi rengini tanımlıyorsa bu kaldırılabilir
                >
                  {/* Bu g etiketleri boş ve gereksiz, React'e yapıştırırken kaldırılabilir veya yorum satırı yapılabilir */}
                  {/* <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> */}
                  {/* <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> */}

                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        style={{ fill: "#6F2B41" }} // Düzeltildi: style="..." -> style={{ ... }}
                        d="M40.824,52H11.176C5.003,52,0,46.997,0,40.824V11.176C0,5.003,5.003,0,11.176,0h29.649 C46.997,0,52,5.003,52,11.176v29.649C52,46.997,46.997,52,40.824,52z"
                      ></path>
                      <g>
                        <path
                          style={{ fill: "#FF70BD" }} // Düzeltildi: style="..." -> style={{ ... }}
                          d="M18.08,39H15.2V13.72l-2.64-0.08V11h5.52V39z"
                        ></path>
                        <path
                          style={{ fill: "#FF70BD" }} // Düzeltildi: style="..." -> style={{ ... }}
                          d="M27.68,19.4c1.173-0.507,2.593-0.761,4.26-0.761s3.073,0.374,4.22,1.12V11h2.88v28 c-2.293,0.32-4.414,0.48-6.36,0.48c-1.947,0-3.707-0.4-5.28-1.2c-2.08-1.066-3.12-2.92-3.12-5.561v-7.56 C24.28,22.36,25.413,20.44,27.68,19.4z M36.16,22.52c-1.387-0.746-2.907-1.119-4.56-1.119c-1.574,0-2.714,0.406-3.42,1.22 c-0.707,0.813-1.06,1.847-1.06,3.1v7.12c0,1.227,0.44,2.188,1.32,2.88C29.4,36.44,30.586,36.8,32,36.8 c1.413,0,2.8-0.106,4.16-0.319V22.52z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <img
            className=" rounded-full w-[450px] h-[450px] "
            src="public/hero3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
