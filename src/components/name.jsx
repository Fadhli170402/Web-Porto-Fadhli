
import TextType from '/reactbits/TextType/TextType';

const Typing = () => {
  return (
     
      <h2 className="text-4xl md:text-10xl font-extrabold leading-tight mb-4  items-center md:text-center text-white">
        <span className='text-white'>Hello, I'm</span>
      <TextType
        text={[" Fadhli Adhliana"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
          
  />
</h2>
  );
};

export default Typing;