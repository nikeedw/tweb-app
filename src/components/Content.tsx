import { FC } from 'react'

type Props = {
	children: React.ReactChild | React.ReactNode;
}

const Content: FC<Props> = ({ children }) => {
	return (
		<div style={{ height: '100%' }}>
			{children}
		</div>
	)
}

export default Content
