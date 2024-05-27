import ActivityBt from "../ActivityBt";
import HelpBt from "../HelpBt";
import SettingBt from "../SettingBt";
import SettingButtonMobile from "../SettingButton/SettingButtonMobile";

interface Props {
    collapsed: boolean
}

const SiderBottom: React.FC<Props> = ({ collapsed }) => (
    <>
        <div>
            <HelpBt collapsed={collapsed} />
            <ActivityBt collapsed={collapsed} />
            <SettingBt collapsed={collapsed} />
        </div>
    </>
)
export default SiderBottom;