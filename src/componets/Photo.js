function Photo(props) {
    console.log(props.name)
    return (
        <div>
            <div className='box3'>
                <img src={props.logo} alt="" style={{ marginBottom: '30px' }} />
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius, atis magnam tempora doloribus ducimus dolorem elit. Fugit modi voluptas vero iusto fuga quos totam eius Sapiente, quia tempora."</p>
                <div className='flex' >
                    <img className='photo' src={props.photo} alt="" width={'100%'} />
                    <div style={{ margin: '15px 0px 0px 0px' }}>
                        <font style={{ color: 'black', fontWeight: '900' }}>{props.name}</font>
                        <p>{props.pos}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo;