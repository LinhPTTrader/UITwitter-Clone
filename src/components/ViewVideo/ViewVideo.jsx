import { Image } from 'antd'
import React from 'react'

const ViewVideo = () => {
    return (
        <div>
            <Image
                width={200}
                preview={{
                    imageRender: () => (
                        <video
                            muted
                            width="100%"
                            controls
                            src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
                        />
                    ),
                    toolbarRender: () => null,
                }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </div>
    )
}

export default ViewVideo