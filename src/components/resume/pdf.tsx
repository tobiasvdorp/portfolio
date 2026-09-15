import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import type { PhrasingContent, RootContent } from "mdast";
import { toString } from "mdast-util-to-string";
import type { Resume } from "@/lib/resume-parser";
const styles = StyleSheet.create({
  page: {
    paddingTop: 43,
    paddingBottom: 48,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.45,
    color: "#35372e",
  },
  name: {
    fontFamily: "Times-Roman",
    fontSize: 35,
    lineHeight: 1.1,
    marginBottom: 12,
  },
  section: {
    fontFamily: "Times-Roman",
    fontSize: 21,
    borderTopWidth: 0.5,
    borderTopColor: "#cfcec5",
    paddingTop: 13,
    marginTop: 19,
    marginBottom: 12,
  },
  heading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    marginTop: 12,
    marginBottom: 7,
  },
  paragraph: { marginBottom: 5 },
  list: { marginBottom: 6 },
  bullet: { flexDirection: "row", marginBottom: 2 },
  marker: { width: 12 },
  bulletText: { flex: 1 },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#77786e",
    fontSize: 8,
  },
});
function inline(nodes: PhrasingContent[]): React.ReactNode[] {
  return nodes.map((node, index) => {
    if (node.type === "strong")
      return (
        <Text key={index} style={{ fontFamily: "Helvetica-Bold" }}>
          {inline(node.children)}
        </Text>
      );
    if (node.type === "emphasis")
      return (
        <Text key={index} style={{ fontFamily: "Helvetica-Oblique" }}>
          {inline(node.children)}
        </Text>
      );
    if (node.type === "link")
      return (
        <Link key={index} src={node.url} style={{ color: "#505642" }}>
          {inline(node.children)}
        </Link>
      );
    if (node.type === "break") return "\n";
    return toString(node);
  });
}
function block(node: RootContent, index: number): React.ReactNode {
  if (node.type === "heading")
    return (
      <Text
        key={index}
        minPresenceAhead={node.depth === 2 ? 65 : 40}
        style={
          node.depth === 1
            ? styles.name
            : node.depth === 2
              ? styles.section
              : styles.heading
        }
      >
        {inline(node.children)}
      </Text>
    );
  if (node.type === "paragraph")
    return (
      <Text
        key={index}
        orphans={3}
        widows={3}
        minPresenceAhead={
          node.children.every((child) => child.type === "strong") ? 30 : 0
        }
        style={styles.paragraph}
      >
        {inline(node.children)}
      </Text>
    );
  if (node.type === "list")
    return (
      <View key={index} style={styles.list}>
        {node.children.map((item, itemIndex) => (
          <View key={itemIndex} style={styles.bullet} wrap={false}>
            <Text style={styles.marker}>
              {node.ordered ? `${itemIndex + 1}.` : "•"}
            </Text>
            <View style={styles.bulletText}>
              {item.children.map((child, childIndex) =>
                block(child, childIndex),
              )}
            </View>
          </View>
        ))}
      </View>
    );
  return null;
}
export function ResumePdf({ resume }: { resume: Resume }) {
  return (
    <Document
      title={`${resume.name} - Curriculum vitae`}
      author={resume.name}
      language="nl"
    >
      <Page size="A4" style={styles.page}>
        {resume.tree.children.map(block)}
        <View style={styles.footer} fixed>
          <Text>
            {resume.name} · {resume.role}
          </Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}
