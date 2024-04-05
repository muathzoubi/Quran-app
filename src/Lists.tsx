const CardList = (props: { setLink: any }) => {
  return (
    <div className="cards">
      <div
        className="card red"
        onClick={() => {
          props.setLink('https://listen.ourquraan.com/Bander_Baleelah/007.mp3');
        }}
      >
        <img
          style={{ borderRadius: 6 }}
          src="https://z-m-scontent.famm3-2.fna.fbcdn.net/v/t39.30808-1/274042246_340591248080578_7564838459634252137_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p495x495_q63_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1341&_nc_ad=z-m&_nc_rml=0&_nc_ht=z-m-scontent.famm3-2.fna&_nc_cat=106&_nc_ohc=glYSazeLNVwAb4lRKva&ccb=1-7&_nc_sid=5f2048&oh=00_AfBGKohCEV8v2TvN84ESTWfZAvU02Zu5XfAiFsh-z2_K2Q&oe=66155F29"
          width={40}
          alt="test"
        />
        <p className="tip">الشيخ بندر بليلة</p>
        <p className="second-text">سورة الاعراف</p>
      </div>
      <div
        className="card blue"
        onClick={() => {
          props.setLink(
            'https://download.ourquraan.com/Ibrahim-jabrin/036.mp3'
          );
        }}
      >
        <img
          style={{ borderRadius: 6 }}
          src="https://z-m-scontent.famm3-2.fna.fbcdn.net/v/t39.30808-1/274042246_340591248080578_7564838459634252137_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p495x495_q63_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1341&_nc_ad=z-m&_nc_rml=0&_nc_ht=z-m-scontent.famm3-2.fna&_nc_cat=106&_nc_ohc=glYSazeLNVwAb4lRKva&ccb=1-7&_nc_sid=5f2048&oh=00_AfBGKohCEV8v2TvN84ESTWfZAvU02Zu5XfAiFsh-z2_K2Q&oe=66155F29"
          width={40}
          alt="test"
        />
        <p className="tip"> الشيخ ابراهيم الجبرين</p>
        <p className="second-text">سورة القدر</p>
      </div>
      <div
        className="card green"
        onClick={() => {
          props.setLink(
            'https://download.ourquraan.com/Ibrahim-al3siri/070.mp3'
          );
        }}
      >
        <img
          style={{ borderRadius: 6 }}
          src="https://z-m-scontent.famm3-2.fna.fbcdn.net/v/t39.30808-1/274042246_340591248080578_7564838459634252137_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p495x495_q63_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1341&_nc_ad=z-m&_nc_rml=0&_nc_ht=z-m-scontent.famm3-2.fna&_nc_cat=106&_nc_ohc=glYSazeLNVwAb4lRKva&ccb=1-7&_nc_sid=5f2048&oh=00_AfBGKohCEV8v2TvN84ESTWfZAvU02Zu5XfAiFsh-z2_K2Q&oe=66155F29"
          width={40}
          alt="test"
        />
        <p className="tip">ابراهيم العسيري</p>
        <p className="second-text">سورة المعارج</p>
      </div>
    </div>
  );
};
export default CardList;
