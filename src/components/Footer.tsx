import { FC } from 'react'
import { Layout as AntdLayout } from "antd";

const AntdFooter = AntdLayout.Footer;

interface Props {
	title: string;
}

const Footer: FC<Props> = ({ title }) => {
	return (
		<AntdFooter className='footer'>
			{title} © {new Date().getFullYear()}
		</AntdFooter>
	)
}

export default Footer;
