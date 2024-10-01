import AccordionItem from './AccordionItem'
import styles from "./styles.module.scss"
import PersonIcon from '@mui/icons-material/Person'
import PsychologyIcon from '@mui/icons-material/Psychology'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function Accordions() {
    return (
        <div className={styles.container}>
            <AccordionItem
                defaultExpanded
                icon={<PersonIcon />}
                title="Terapia Individual"
                description="Na terapia individual, ofereço um espaço seguro e confidencial para que você possa explorar seus sentimentos, desafios e metas. Juntos, trabalharemos em estratégias personalizadas para promover seu bem-estar emocional, autoconhecimento e superação de dificuldades."
            />
            <AccordionItem
                icon={<PsychologyIcon />}
                title="Aconselhamento Psicológico"
                description="O aconselhamento psicológico oferece apoio em momentos de crise ou transição. Seja para lidar com ansiedade, estresse ou tomada de decisões importantes, estou aqui para ajudá-lo a encontrar clareza e equilíbrio para seguir em frente."
            />
            <AccordionItem
                icon={<FavoriteIcon />}
                title="Terapia de Casal"
                description="A terapia de casal é voltada para ajudar parceiros a melhorar a comunicação, resolver conflitos e fortalecer o vínculo. Através de sessões colaborativas, trabalhamos na construção de um relacionamento mais saudável e harmonioso."
            />
        </div>
    )
}
