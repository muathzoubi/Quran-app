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
          src="https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={55}
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
          src="https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={55}
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
          src="https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={55}
          alt="test"
        />
        <p className="tip">ابراهيم العسيري</p>
        <p className="second-text">سورة المعارج</p>
      </div>
    </div>
  );
};
export default CardList;
