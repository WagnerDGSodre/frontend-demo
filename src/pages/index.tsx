import Layout from '../components/theme/Layout'
import { IconData, IconHome, IconInfo, IconSearch } from '../components/icons/Icons'
import Panel from '../components/theme/Panel'
import Grid from '../components/patient/Grid'
import Content from '../components/theme/Layout'
import UseContextData from '../hook/UseContext'

export default function Home(props) {
  const { DarkOn, tema } = UseContextData()
  return (
    <div className={`${tema} dark:bg-gray-900`}>
      <Layout title='Bem - vindo(a) ao sistema'>
        {props.children}
        <Panel >
          <Grid title='Paciente' icon={IconData} url='' />
          <Grid title='Pesquisa' icon={IconSearch} url='' />
          <Grid title='Faq' icon={IconInfo} url='' />
        </Panel>
      </Layout>
    </div>
  )
}
